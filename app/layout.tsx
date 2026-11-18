import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader, SiteFooter } from "@/components/site";

export const metadata: Metadata = {
  title: { default: "Dream House Cinemas — Stories, beautifully told.", template: "%s | Dream House Cinemas" },
  description: "Film production and professional camera, lighting and equipment rental. Dream House Cinemas brings stories to life across Kerala and South India.",
  keywords: ["Dream House Cinemas", "film production Kerala", "camera rental Kerala", "lighting equipment rental", "commercial films", "documentaries"],
  openGraph: { title: "Dream House Cinemas", description: "Bringing stories to life. Frame by frame.", type: "website" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteHeader />{children}<SiteFooter /></body></html>;
}