import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


export const metadata: Metadata = {
  title: "Unilever",
  description: "Discover a world of sustainable solutions and innovative products on Unilever's landing page, designed to enhance your lifestyle while caring for the environment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-y-auto">
      <body>{children}</body>
    </html>
  );
}
