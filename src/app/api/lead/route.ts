import { NextResponse } from "next/server";

// Stub. TODO: forward to HubSpot (forms API or CRM objects) with speed-to-lead routing.
// Never log full lead details in production; this logs only the source.
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  console.log("lead received", { source: (body as { source?: string }).source });
  return NextResponse.json({ ok: true });
}
