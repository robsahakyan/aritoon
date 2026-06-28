"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Globe, Menu, ShoppingCart, User, X } from "lucide-react";
import { currencies, languages, mainNav } from "@/lib/navigation";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="border-b border-border bg-surface">
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-4 px-4 py-2 text-sm">
          <Link href="/login" className="flex items-center gap-1 text-muted hover:text-primary">
            <User className="h-4 w-4" />
            Sign in
          </Link>
          <Link href="/register" className="text-muted hover:text-primary">
            Register
          </Link>
          <Link href="/cart" className="flex items-center gap-1 text-muted hover:text-primary">
            <ShoppingCart className="h-4 w-4" />
            <span>0</span>
          </Link>
          <div className="flex items-center gap-1 text-muted">
            <span className="font-medium text-foreground">$</span>
            <select className="bg-transparent text-sm outline-none">
              {currencies.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-1 text-muted">
            <Globe className="h-4 w-4" />
            <select className="bg-transparent text-sm outline-none">
              {languages.map((l) => (
                <option key={l.code} value={l.code}>
                  {l.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-2xl font-bold tracking-tight text-primary">
          Aritoon
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-surface hover:text-primary"
              >
                {item.label}
                <ChevronDown className="h-3.5 w-3.5 opacity-60" />
              </Link>
              {openDropdown === item.label && (
                <div className="absolute left-0 top-full min-w-[220px] rounded-lg border border-border bg-white py-2 shadow-lg">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-surface hover:text-primary"
                    >
                      {child.label}
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
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-border bg-white px-4 py-4 lg:hidden">
          {mainNav.map((item) => (
            <div key={item.label} className="border-b border-border py-3 last:border-0">
              <Link
                href={item.href}
                className="font-medium text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              <div className="mt-2 flex flex-col gap-1 pl-3">
                {item.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="py-1 text-sm text-muted hover:text-primary"
                    onClick={() => setMobileOpen(false)}
                  >
                    {child.label}
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
