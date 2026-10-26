import type { Metadata } from "next";
import { allPaths, stateFor, TITLES } from "@/site/routes";

export function generateStaticParams() {
  return allPaths().map((p) => ({ slug: p === "/" ? [] : p.slice(1).split("/") }));
}

export async function generateMetadata({ params }: PageProps<"/[[...slug]]">): Promise<Metadata> {
  const { slug } = await params;
  const path = "/" + (slug ?? []).join("/");
  return { title: TITLES[stateFor(path).page] ?? TITLES.home };
}

// The page content is rendered by SiteRoot in the root layout; this route only picks the URL.
export default function Page() {
  return null;
}
