import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Host Hit Squad - Your Local Airbnb Support Team",
  description: "Professional local contact and emergency response services for Airbnb hosts in Oakhurst & the Yosemite Gateway Region. 24/7 availability, compliance support, and peace of mind.",
  keywords: "Airbnb, local contact, Oakhurst, Yosemite, short-term rental, STR, emergency response, property management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
