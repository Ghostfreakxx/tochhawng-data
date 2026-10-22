import "./globals.css";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Tochhawng Data | Mizoram through numbers",
    template: "%s | Tochhawng Data",
  },
  description:
    "Public data dashboards for Mizoram: jobs and recruitment, government portals, budget, health, education, agriculture, elections and public safety.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geistSans.variable}>
      <body className="min-h-screen font-sans antialiased">
        <Navbar />
        <main className="mx-auto max-w-7xl px-4 sm:px-6">{children}</main>
        <Footer />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WYV5KGMKXP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-WYV5KGMKXP');
          `}
        </Script>
      </body>
    </html>
  );
}
