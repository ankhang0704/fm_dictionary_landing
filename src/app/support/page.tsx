"use client";

import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function SupportPage() {
  const { t } = useLanguage();
  return (
    <main className="mx-auto max-w-6xl px-6 pb-24 pt-32 sm:px-8">
      <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <section className="max-w-3xl">
          <h1 className="mb-6 text-5xl font-semibold leading-[1.02] tracking-tight text-ink sm:text-7xl">
            {t("Hỗ trợ FM Dictionary.", "FM Dictionary support.")}
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-ink-muted sm:text-xl">
            {t("Cần hỗ trợ FM Dictionary? Gửi email mô tả vấn đề bạn gặp phải.", "Need help with FM Dictionary? Email us and describe your issue.")}
          </p>
        </section>

        <a
          href="mailto:ankhang.nguyen0704@gmail.com?subject=FM%20Dictionary%20Support"
          className="group flex min-h-48 flex-col justify-between bg-accent-blue p-7 text-black transition-colors hover:bg-sky-300 active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-blue motion-reduce:transition-none motion-reduce:transform-none sm:p-9"
        >
          <div className="flex items-start justify-between">
            <Mail aria-hidden="true" size={26} />
            <ArrowUpRight aria-hidden="true" size={22} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:transform-none" />
          </div>
          <span className="text-sm font-semibold sm:text-xl">ankhang.nguyen0704<wbr />@gmail.com</span>
        </a>
      </div>

      <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-hairline pt-6 text-sm text-ink-muted">
        <p>{t("Cho biết thiết bị và phiên bản ứng dụng. Đừng gửi mật khẩu.", "Include your device and app version. Never send passwords.")}</p>
        <Link className="font-medium text-accent-blue underline-offset-4 hover:underline" href="/faq">FAQ</Link>
        <Link className="font-medium text-accent-blue underline-offset-4 hover:underline" href="/about">
          {t("Về dự án", "About the project")}
        </Link>
      </div>
    </main>
  );
}
