import Link from "next/link";
import { localeHref, type Locale } from "@/i18n/config";
import { contact, footerLinks } from "@/i18n/structure";
import type { Content } from "@/i18n/types";

export function Footer({ lang, ui }: { lang: Locale; ui: Content["ui"] }) {
  return (
    <footer className="bg-foreground text-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-2xl font-bold text-white">Aritoon</p>
            <p className="mt-3 text-sm leading-relaxed text-white/70">{ui.footerAbout}</p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">{ui.footerContact}</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>{ui.address}</li>
              <li>
                <a href={contact.phoneHref} className="hover:text-white">
                  {contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="hover:text-white">
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">{ui.footerLinks}</h3>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <Link href={localeHref(lang, link.href)} className="text-white/70 hover:text-white">
                    {ui.nav[link.id]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/50 md:flex-row">
          <p>
            2002 – {new Date().getFullYear()}, {ui.copyright}
          </p>
          <div className="flex gap-3">
            {["Visa", "Mastercard", "Amex"].map((method) => (
              <span key={method} className="rounded border border-white/20 px-2 py-1 text-xs">
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
