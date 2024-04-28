import type { Metadata } from "next";
import "../globals.css";


export const metadata: Metadata = {
  title: "Unilever | Test Page",
  description: "Test",

};

export default function TestLayout({ children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="  scroll-smooth overflow-y-auto">
      <body className="">{children}</body>
    </html>
  );
}
