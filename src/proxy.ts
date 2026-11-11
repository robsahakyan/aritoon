import { NextResponse, type NextRequest } from "next/server";
import { LOCALE_COOKIE, isLocale, localeHref, matchLocale } from "@/i18n/config";

// Send URLs without a language prefix (e.g. "/tours") to the visitor's language:
// their saved choice first, then their browser language, then English.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const first = pathname.split("/")[1] ?? "";
  if (isLocale(first)) return;

  const saved = request.cookies.get(LOCALE_COOKIE)?.value ?? "";
  const lang = isLocale(saved) ? saved : matchLocale(request.headers.get("accept-language"));

  const url = request.nextUrl.clone();
  url.pathname = localeHref(lang, pathname === "/" ? "/" : pathname.replace(/\/$/, ""));
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next.js internals and files with an extension (favicon, images, etc.).
  matcher: ["/((?!_next|.*\\..*).*)"],
};
