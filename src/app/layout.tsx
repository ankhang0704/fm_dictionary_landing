import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "FM Dictionary — The Premier Facility Management English Platform",
  description:
    "Master 1,800+ specialized Facility Management English terminology with spaced repetition flashcards, real-world MEP scenarios, and AI speech recognition.",
  keywords: [
    "Facility Management",
    "FM Dictionary",
    "MEP Engineering",
    "HVAC English",
    "Building Operations",
    "Smart Building Vocabulary",
  ],
  authors: [{ name: "An Khang", url: "https://github.com/ankhang0704" }],
  openGraph: {
    title: "FM Dictionary — Facility Management English Platform",
    description:
      "1,800+ specialized terms, 53 technical topics, SRS flashcards, and AI speech scoring.",
    url: "https://ankhang0704.github.io/fm-dictionary",
    siteName: "FM Dictionary",
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="dark scroll-smooth">
      <body className="bg-canvas text-ink antialiased selection:bg-accent-blue selection:text-white">
        <LanguageProvider>
          <Navbar />
          <main className="min-h-screen pt-20">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
