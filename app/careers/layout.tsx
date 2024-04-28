import type { Metadata } from "next";
import "../globals.css";


export const metadata: Metadata = {
  title: "Unilever | Careers",
  description: "Discover a world of sustainable solutions and innovative products on Unilever's landing page, designed to enhance your lifestyle while caring for the environment.",
  //Anyone facing the same issue in Nextjs latest version (v14), move your icon to app directory and just rename the favicon.ico to icon.ico
};

export default function RootLayout({ children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-y-auto">
      <body>{children}</body>
    </html>
  );
}
