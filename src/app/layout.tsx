import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ari-to.vercel.app"),
  title: "ARI-TO | Intelligent Automation & Digital Solutions",
  description:
    "ARI-TO builds intelligent WhatsApp automations, AI voice workflows, business automation systems, application integrations, and modern websites that help businesses operate smarter.",
  keywords: [
    "automation",
    "WhatsApp automation",
    "business automation",
    "AI voice",
    "workflow automation",
    "web development",
    "digital solutions",
    "integration",
  ],
  authors: [{ name: "ARI-TO" }],
  creator: "ARI-TO",
  publisher: "ARI-TO",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ari-to.vercel.app",
    siteName: "ARI-TO",
    title: "ARI-TO | Intelligent Automation & Digital Solutions",
    description:
      "We build intelligent automation systems, connected applications, and digital experiences that help businesses operate smarter, faster, and better.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ARI-TO - The Future of Business Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ARI-TO | Intelligent Automation & Digital Solutions",
    description:
      "We build intelligent automation systems, connected applications, and digital experiences that help businesses operate smarter, faster, and better.",
    creator: "@ari_to",
  },
  alternates: {
    canonical: "https://ari-to.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${spaceGrotesk.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#050505" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="bg-[#050505] text-white font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
