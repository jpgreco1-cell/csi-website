import type { Metadata } from "next";
import { DeviceFrame } from "@/site/DeviceFrame";

export const metadata: Metadata = {
  title: "Tablet version | CSI Group site preview",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <DeviceFrame device="tablet" />;
}