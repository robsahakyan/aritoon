import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { localeLabels, locales } from "@/i18n/config";
import { getContent } from "@/i18n";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "404 | Aritoon",
};

// Shown for any URL that doesn't match a page. It has no access to the visitor's
// language, so it shows the message in every supported language.
export default function GlobalNotFound() {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <header className="bg-white shadow-sm">
          <div className="mx-auto max-w-7xl px-4 py-4">
            <Link href="/" className="text-2xl font-bold tracking-tight text-primary">
              Aritoon
            </Link>
          </div>
        </header>
        <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">404</p>
          <div className="mt-6 grid gap-8 md:grid-cols-3">
            {locales.map((lang) => {
              const { ui } = getContent(lang);
              return (
                <section key={lang} lang={lang}>
                  <h1 className="text-2xl font-bold text-foreground">{ui.notFoundTitle}</h1>
                  <p className="mt-3 text-muted">{ui.notFoundText}</p>
                  <Link
                    href={`/${lang}`}
                    className="mt-5 inline-block rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark"
                  >
                    {ui.notFoundBack} · {localeLabels[lang]}
                  </Link>
                </section>
              );
            })}
          </div>
        </main>
      </body>
    </html>
  );
}
