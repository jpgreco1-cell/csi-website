import type { Metadata } from "next";
import "@/ds/tokens.css";
import "./globals.css";
import "@/site/CSIGroupWebsite.generated.css";
import "@/site/CallbackForm.generated.css";
import { SiteRoot } from "@/site/SiteRoot";

export const metadata: Metadata = {
  title: "CSI Group® | Family Financial Specialists",
  description:
    "Taxes, retirement, investments, insurance, wills and estates, handled by one team under one roof. Family-owned since 1973.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Same font request as the design system's tokens/fonts.css */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Montserrat:wght@300;400;500;600;700;800;900&display=swap"
        />
      </head>
      <body>
        {/* The site is rendered by SiteRoot (converted from the Claude Design file); routes only choose the page. */}
        <a className="csi-skip" href="#main">
          Skip to content
        </a>
        <SiteRoot />
        {children}
      </body>
    </html>
  );
}
