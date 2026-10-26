import type { MetadataRoute } from "next";
import { allPaths } from "@/site/routes";

// TODO: set NEXT_PUBLIC_SITE_URL to the live address. The site's inner pages are reached through
// in-page navigation, so a sitemap is how search engines discover them.
const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://csicpa.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return allPaths().map((p) => ({ url: BASE + (p === "/" ? "" : p) }));
}
