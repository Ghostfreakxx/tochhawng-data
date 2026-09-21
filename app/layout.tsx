import "./globals.css";
import Script from "next/script";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Tochhawng Data",
  description: "Mizoram public dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
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
      </head>

      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
