import type { Metadata } from "next";
import "./globals.css";
import "./pages.css";

export const metadata: Metadata = {
  title: "NowITSystems – ServiceNow solutions built for your business",
  description: "NowITSystems is a ServiceNow partner with 24x7 support. We design, build and run ITSM, ITOM, ITAM, GRC, SecOps, HRSD, CSM and more around your business.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-theme="light"><body>{children}</body></html>;
}
