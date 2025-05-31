import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

// Load Manrope font
const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fortilink",
  description: " Created by Manthan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={clsx(manrope.className, "antialiased bg-[#EAEEFE]")}>
        {children}
      </body>
    </html>
  );
}
