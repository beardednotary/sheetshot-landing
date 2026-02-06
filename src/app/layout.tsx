import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "SheetShot | Screenshot to Spreadsheet",
  description:
    "Take a screenshot of numbers, share it to SheetShot, and instantly get totals, averages, or a CSV export.",
  openGraph: {
    title: "SheetShot | Screenshot to Spreadsheet",
    description:
      "Take a screenshot of numbers, share it to SheetShot, and instantly get totals, averages, or a CSV export.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
