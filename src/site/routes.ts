// Maps the design's in-page "page" names to real URLs, and back.
export const AUDIENCE_SLUGS = [
  "starting", "married", "havingkids", "raising", "collegeplan", "upsdowns",
  "collegepay", "retiring", "grownkids", "inretirement", "legacy", "parents", "preretire", "seniors",
];
export const SERVICE_SLUGS = ["tax", "wealth", "legal", "insurance", "csi360"];
export const ARTICLE_COUNT = 6;

const STATIC: Record<string, string> = {
  home: "/",
  csi360: "/360-review",
  services: "/services",
  membership: "/membership",
  locations: "/locations",
  about: "/about",
  resources: "/guides",
  forms: "/forms",
  faq: "/faq",
  reviews: "/reviews",
  whoweserve: "/who-we-serve",
  switching: "/get-started",
  lifeevents: "/life-events",
  refer: "/refer",
  contact: "/contact",
  login: "/member-login",
  careers: "/join-our-team",
  ma: "/sell-your-practice",
  assessment: "/health-check",
  start: "/book",
  disclosure: "/disclosure",
  privacy: "/privacy-policy",
};

export function pathFor(page: string, slug?: string, articleIdx = 0): string {
  if (page === "service") return `/services/${slug || "tax"}`;
  if (page === "audience") return `/who-we-serve/${slug || "parents"}`;
  if (page === "article") return `/guides/article/${articleIdx + 1}`;
  return STATIC[page] ?? "/";
}

export function stateFor(pathname: string): { page: string; slug?: string; articleIdx?: number } {
  const p = pathname.replace(/\/+$/, "") || "/";
  let m = p.match(/^\/services\/([^/]+)$/);
  if (m) return { page: "service", slug: m[1] };
  m = p.match(/^\/who-we-serve\/([^/]+)$/);
  if (m) return { page: "audience", slug: m[1] };
  m = p.match(/^\/guides\/article\/(\d+)$/);
  if (m) return { page: "article", articleIdx: Math.max(0, parseInt(m[1], 10) - 1) };
  const hit = Object.entries(STATIC).find(([, v]) => v === p);
  return { page: hit ? hit[0] : "home" };
}

export function allPaths(): string[] {
  return [
    ...Object.values(STATIC),
    ...SERVICE_SLUGS.map((s) => `/services/${s}`),
    ...AUDIENCE_SLUGS.map((s) => `/who-we-serve/${s}`),
    ...Array.from({ length: ARTICLE_COUNT }, (_, i) => `/guides/article/${i + 1}`),
  ];
}

export const TITLES: Record<string, string> = {
  home: "CSI Group® | Family Financial Specialists",
  csi360: "CSI360™ Financial Checkup | CSI Group®",
  services: "Services | CSI Group®",
  service: "Services | CSI Group®",
  membership: "Membership | CSI Group®",
  locations: "Locations | CSI Group®",
  about: "About | CSI Group®",
  resources: "Guides & Blog | CSI Group®",
  article: "Guides & Blog | CSI Group®",
  forms: "Client Organizer & Forms | CSI Group®",
  faq: "FAQ | CSI Group®",
  reviews: "Member Stories | CSI Group®",
  whoweserve: "Who We Serve | CSI Group®",
  audience: "Who We Serve | CSI Group®",
  switching: "Ways to Get Started | CSI Group®",
  lifeevents: "When Life Changes | CSI Group®",
  refer: "Refer a Family | CSI Group®",
  contact: "Contact | CSI Group®",
  login: "Member Login | CSI Group®",
  careers: "Join Our Team | CSI Group®",
  ma: "Sell Your Practice | CSI Group®",
  assessment: "Free Financial Health Check | CSI Group®",
  start: "Book Your Intro Call | CSI Group®",
  disclosure: "Disclosure Statement | CSI Group®",
  privacy: "Privacy Policy | CSI Group®",
};
