import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support | FM Dictionary",
  description:
    "Contact FM Dictionary support for help with the app, terminology, or installation.",
  alternates: { canonical: "/support" },
};

export default function SupportLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
