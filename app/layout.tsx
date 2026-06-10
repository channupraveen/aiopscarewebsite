import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aiopscare.com"),
  title: "AiOpsCare — AI Operating System for Hospital Operations",
  description: "Automate maintenance, housekeeping, compliance, audits, and operational workflows across hospitals using AI-powered agents and intelligent automation.",
  keywords: "hospital operations, AI automation, CMMS, NABH compliance, hospital maintenance management software, healthcare facility management, hospital housekeeping software, linen management, India",
  alternates: {
    canonical: "https://aiopscare.com",
  },
  openGraph: {
    title: "AiOpsCare — AI Operating System for Hospital Operations",
    description: "Automate maintenance, housekeeping, compliance, audits, and operational workflows across hospitals.",
    url: "https://aiopscare.com",
    siteName: "AiOpsCare",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "AiOpsCare — AI Operating System for Hospital Operations",
    description: "Automate maintenance, housekeeping, compliance, audits, and operational workflows across hospitals.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
