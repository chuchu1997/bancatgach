/** @format */

import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import { WEBSITE_NAME, META_SEO_DASHBOARD } from "@/config/constant";

import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { BodyContainer } from "@/components/BodyContainer";
import { Footer } from "@/components/layouts/Footer";
import BlockSidebar from "@/components/layouts/BlockSidebar";
import { MobileGroupButton } from "@/components/layouts/MobileGroupButton";
import BlockPhoneNumber from "@/components/layouts/BlockPhoneNumber";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const baseUrl = "https://www.bancatgach.com";
export const metadata: Metadata = {
  // Basic metadata
  title: {
    default:
      "Chuyên cung cấp Bàn Cắt Gạch, Makita, Máy Rửa Xe, Máy Bơm Chính Hãng | Giá Tốt",
    template: "Máy Xây Dựng Mới",
  },
  description:
    "Chuyên cung cấp bán sỉ và lẻ bàn cắt gạch ,máy cắt gạch,  công cụ Makita, máy rửa xe, máy bơm nước chính hãng. Giá cạnh tranh, bảo hành chính hãng, giao hàng toàn quốc.",

  // Canonical URL
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: "/",
    languages: {
      "vi-VN": "/",
    },
  },

  // Open Graph metadata for social sharing
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: baseUrl,
    siteName: "Bàn cắt gạch",
    title: "Bán Bàn Cắt Gạch, Makita, Máy Rửa Xe, Máy Bơm Chính Hãng | Giá Tốt",
    description:
      "Chuyên cung cấp bán sỉ và lẻ máy cắt gạch, bàn cắt gạch ,công cụ Makita, máy rửa xe, máy bơm nước chính hãng. Giá cạnh tranh, bảo hành chính hãng, giao hàng toàn quốc.",
    images: [
      {
        url: `${baseUrl}/images/banner/14.png`,
        width: 1200,
        height: 630,
        alt: "Bàn cắt gạch - Dụng cụ và máy móc xây dựng chính hãng",
      },
    ],
  },

  // Icons

  // Application metadata
  applicationName: "Bàn cắt gạch",
  keywords: [
    "bàn cắt gạch",
    "ban cat gach",
    "máy cắt gạch",
    "máy cắt gạch chính hãng",
    "bán máy cắt gạch",
    "máy cắt gạch giá rẻ",
    "makita",
    "dụng cụ makita",
    "máy khoan makita",
    "makita chính hãng",
    "máy rửa xe",
    "máy rửa xe cao áp",
    "máy rửa xe gia đình",
    "máy rửa xe công nghiệp",
    "máy bơm nước",
    "máy bơm chìm",
    "máy bơm hơi",
    "máy bơm chính hãng",
    "dụng cụ xây dựng",
    "thiết bị xây dựng",
    "công cụ làm vườn",
  ],
  authors: [{ name: "Cường" }],
  creator: "cường",
  publisher: "Vercel",

  // Mobile app configuration
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },

  // Verification for search engines
  verification: {
    google: "wMt7hnMjLRlaD0X0IA3qJTzTLCVmnoueLA0APvABQDk",
  },

  // Robot directives
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "standard",
      "max-snippet": 1,
    },
  },

  // Region and language
  category: "shopping",

  // Viewport settings

  // Theme color
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased relative `}>
        <Navbar />
        <BodyContainer>{children}</BodyContainer>
        <BlockPhoneNumber />
        <BlockSidebar />
        <MobileGroupButton />

        <Footer />
      </body>
    </html>
  );
}
