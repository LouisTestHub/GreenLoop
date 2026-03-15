import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GreenLoop — UK Waste Management & EDOC Compliance Platform",
  description: "Digital Waste Tracking for UK waste carriers. EDOC-ready from October 2026. Fleet management, compliance, invoicing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
