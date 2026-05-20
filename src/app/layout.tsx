import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const GOOGLE_ADS_ID = "AW-18057040233";
const GOOGLE_ADS_SHARED_ID = "AW-18125449559";

export const metadata: Metadata = {
  title: "Wedding Venue in Mississauga | Mississauga Convention Centre",
  description:
    "Luxury wedding venue in Mississauga with 7 elegant halls, in-house catering, outdoor patio ceremonies, and custom wedding packages.",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
    shortcut: "/icon.png"
  },
  alternates: {
    canonical: "https://weddings.mississaugaconvention.com/"
  },
  openGraph: {
    title: "Wedding Venue in Mississauga | Mississauga Convention Centre",
    description:
      "7 elegant halls. Up to 2,280 guests. 56 years of celebrations. Explore the branded MCC wedding landing page.",
    url: "https://weddings.mississaugaconvention.com/",
    siteName: "Mississauga Convention Centre",
    images: [
      {
        url: "https://mississaugaconvention.com/wp-content/uploads/2025/10/Mississauga-Convention-Centre_JDass-Corp_Banner-1_NEW.jpg"
      }
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GOOGLE_ADS_ID}');
gtag('config', '${GOOGLE_ADS_SHARED_ID}');`}
        </Script>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
