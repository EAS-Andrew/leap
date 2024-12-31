import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LeapPepe ($LEAP) - The Most Ambitious Meme Coin",
  description: "LeapPepe ($LEAP) is a meme coin that celebrates bold leaps in both finance and humor. Join our community of forward-thinking crypto enthusiasts!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
