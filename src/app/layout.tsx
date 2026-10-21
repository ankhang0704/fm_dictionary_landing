import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const viewport: Viewport = {
  themeColor: "#090909",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://fm-dictionary.dev"),
  title: "FM Dictionary: Specialized Facility Management English Platform",
  description:
    "Master 1,800+ specialized Facility Management English terminology with spaced repetition flashcards, real-world MEP scenarios, and dual UK/US phonetics. 100% free community project.",
  keywords: [
    "Facility Management",
    "FM Dictionary",
    "MEP Engineering",
    "HVAC English",
    "Building Operations",
    "Smart Building Vocabulary",
    "BMS Automation",
  ],
  authors: [
    { name: "Thuy Ta", url: "https://fm-dictionary.dev/about" },
    { name: "Nguyen An Khang", url: "mailto:ankhang.nguyen0704@gmail.com" },
  ],
  creator: "Thuy Ta & Nguyen An Khang",
  publisher: "FM Dictionary Community Project",
  icons: {
    icon: "/icons/app_icon.png",
    apple: "/icons/app_icon.png",
  },
  openGraph: {
    title: "FM Dictionary: Facility Management English Platform",
    description:
      "1,800+ specialized terms, 53 technical topics, SRS flashcards, and dual UK/US phonetics. 100% free community project.",
    url: "https://fm-dictionary.dev",
    siteName: "FM Dictionary",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/images/fm-dictionary-editorial-cover.webp",
        width: 1200,
        height: 630,
        alt: "FM Dictionary: Facility Management English Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FM Dictionary: Facility Management English Platform",
    description:
      "Master 1,800+ specialized Facility Management English terminology with spaced repetition and dual UK/US phonetics.",
    images: ["/images/fm-dictionary-editorial-cover.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "FM Dictionary",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Android, iOS, Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "Specialized Facility Management English Terminology platform with spaced repetition, dual phonetics, and real-world MEP engineering simulations. 100% free community project.",
    creator: [
      {
        "@type": "Person",
        name: "Thuy Ta",
        jobTitle: "Project Owner",
      },
      {
        "@type": "Person",
        name: "Nguyen An Khang",
        jobTitle: "Software Developer",
        email: "ankhang.nguyen0704@gmail.com",
      },
    ],
  };

  return (
    <html lang="vi" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-canvas text-ink antialiased selection:bg-accent-blue selection:text-white">
        <LanguageProvider>
          <Navbar />
          <main className="min-h-[100dvh] pt-20">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
