import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const GTM_ID = "GTM-MQ87X9QN";
const GOOGLE_ADS_ID = "AW-18058958924";

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
        <Script id="gtm-script" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GOOGLE_ADS_ID}');`}
        </Script>
      </head>
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
