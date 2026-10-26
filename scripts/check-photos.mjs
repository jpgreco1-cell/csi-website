// Reports the pixel size of every photo in public/photos and flags the ones that are too small
// to look sharp at full width. Run with: npm run photos:check
import fs from "node:fs";
import path from "node:path";

const dir = "public/photos";
const MIN_W = 1200;

function size(buf) {
  // JPEG
  if (buf[0] === 0xff && buf[1] === 0xd8) {
    let i = 2;
    while (i < buf.length) {
      if (buf[i] !== 0xff) { i++; continue; }
      const m = buf[i + 1];
      const len = buf.readUInt16BE(i + 2);
      if (m >= 0xc0 && m <= 0xcf && m !== 0xc4 && m !== 0xc8 && m !== 0xcc) {
        return { h: buf.readUInt16BE(i + 5), w: buf.readUInt16BE(i + 7) };
      }
      i += 2 + len;
    }
  }
  // WebP (VP8X / VP8 / VP8L)
  if (buf.toString("ascii", 0, 4) === "RIFF" && buf.toString("ascii", 8, 12) === "WEBP") {
    const t = buf.toString("ascii", 12, 16);
    if (t === "VP8X") return { w: 1 + buf.readUIntLE(24, 3), h: 1 + buf.readUIntLE(27, 3) };
    if (t === "VP8 ") return { w: buf.readUInt16LE(26) & 0x3fff, h: buf.readUInt16LE(28) & 0x3fff };
    if (t === "VP8L") { const b = buf.readUInt32LE(21); return { w: 1 + (b & 0x3fff), h: 1 + ((b >> 14) & 0x3fff) }; }
  }
  // PNG
  if (buf.toString("ascii", 1, 4) === "PNG") return { w: buf.readUInt32BE(16), h: buf.readUInt32BE(20) };
  return null;
}

let low = 0;
for (const f of fs.readdirSync(dir).sort()) {
  const s = size(fs.readFileSync(path.join(dir, f)));
  if (!s) continue;
  const ok = s.w >= MIN_W;
  if (!ok) low++;
  console.log(`${ok ? "ok " : "LOW"}  ${f.padEnd(26)} ${s.w} x ${s.h}`);
}
console.log(low ? `\n${low} photo(s) are under ${MIN_W}px wide and will look soft. See content/image-prompts.md.` : "\nAll photos are large enough.");
