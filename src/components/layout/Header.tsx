"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ChevronDown, Globe, Menu, ShoppingCart, User, X } from "lucide-react";
import {
  LOCALE_COOKIE,
  isLocale,
  localeHref,
  localeLabels,
  locales,
  switchLocalePath,
  type Locale,
} from "@/i18n/config";
import { currencies, navStructure } from "@/i18n/structure";
import type { Content } from "@/i18n/types";

export function Header({ lang, ui }: { lang: Locale; ui: Content["ui"] }) {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const href = (path: string) => localeHref(lang, path);

  function changeLanguage(next: string) {
    if (!isLocale(next) || next === lang) return;
    document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`;
    router.push(switchLocalePath(window.location.pathname, next) + window.location.search);
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="border-b border-border bg-surface">
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-4 px-4 py-2 text-sm">
          <Link href={href("/login")} className="flex items-center gap-1 text-muted hover:text-primary">
            <User className="h-4 w-4" />
            {ui.signIn}
          </Link>
          <Link href={href("/register")} className="text-muted hover:text-primary">
            {ui.register}
          </Link>
          <Link
            href={href("/cart")}
            aria-label={ui.cart}
            className="flex items-center gap-1 text-muted hover:text-primary"
          >
            <ShoppingCart className="h-4 w-4" />
            <span>0</span>
          </Link>
          <div className="flex items-center gap-1 text-muted">
            <span className="font-medium text-foreground">$</span>
            <select aria-label={ui.currency} className="bg-transparent text-sm outline-none">
              {currencies.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-1 text-muted">
            <Globe className="h-4 w-4" />
            <select
              aria-label={ui.language}
              className="bg-transparent text-sm outline-none"
              value={lang}
              onChange={(e) => changeLanguage(e.target.value)}
            >
              {locales.map((l) => (
                <option key={l} value={l}>
                  {localeLabels[l]}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href={href("/")} className="text-2xl font-bold tracking-tight text-primary">
          Aritoon
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navStructure.map((item) => (
            <div
              key={item.id}
              className="relative"
              onMouseEnter={() => setOpenDropdown(item.id)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={href(item.href)}
                className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-surface hover:text-primary"
              >
                {ui.nav[item.id]}
                <ChevronDown className="h-3.5 w-3.5 opacity-60" />
              </Link>
              {openDropdown === item.id && (
                <div className="absolute left-0 top-full min-w-[220px] rounded-lg border border-border bg-white py-2 shadow-lg">
                  {item.children.map((child) => (
                    <Link
                      key={child.id}
                      href={href(child.href)}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-surface hover:text-primary"
                    >
                      {ui.nav[child.id]}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <button
          type="button"
          className="rounded-md p-2 text-foreground lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? ui.closeMenu : ui.openMenu}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-border bg-white px-4 py-4 lg:hidden">
          {navStructure.map((item) => (
            <div key={item.id} className="border-b border-border py-3 last:border-0">
              <Link
                href={href(item.href)}
                className="font-medium text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {ui.nav[item.id]}
              </Link>
              <div className="mt-2 flex flex-col gap-1 pl-3">
                {item.children.map((child) => (
                  <Link
                    key={child.id}
                    href={href(child.href)}
                    className="py-1 text-sm text-muted hover:text-primary"
                    onClick={() => setMobileOpen(false)}
                  >
                    {ui.nav[child.id]}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>
      )}
    </header>
  );
}
