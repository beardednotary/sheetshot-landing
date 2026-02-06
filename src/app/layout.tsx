import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://sheetshot.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "SheetShot — Turn Screenshots Into Spreadsheets",
    template: "%s | SheetShot",
  },

  description:
    "Take a screenshot of numbers, share it to SheetShot, and instantly get totals, averages, or export to CSV or Google Sheets.",

  keywords: [
    "screenshot to spreadsheet",
    "OCR numbers",
    "image to CSV",
    "extract numbers from screenshot",
    "iOS productivity apps",
  ],

  authors: [{ name: "SheetShot" }],

  openGraph: {
    title: "SheetShot — Turn Screenshots Into Spreadsheets",
    description:
      "Take a screenshot of numbers, share it to SheetShot, and instantly get totals, averages, or export to CSV or Google Sheets.",
    url: siteUrl,
    siteName: "SheetShot",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "SheetShot app preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "SheetShot — Turn Screenshots Into Spreadsheets",
    description:
      "Extract numbers instantly. No typing required.",
    images: ["/og.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
