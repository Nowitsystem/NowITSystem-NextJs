import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NowITSystems | ServiceNow solutions",
  description:
    "NowITSystems designs and runs ServiceNow workflows that help teams work with less friction.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}