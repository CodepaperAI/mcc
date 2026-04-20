import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wedding Venue in Mississauga | Mississauga Convention Centre",
  description:
    "Luxury wedding venue in Mississauga with 7 elegant halls, in-house catering, outdoor patio ceremonies, and custom wedding packages.",
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
      <body>{children}</body>
    </html>
  );
}
