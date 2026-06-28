import Link from "next/link";

const footerLinks = [
  { label: "About Us", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "FAQ", href: "/faq" },
  { label: "Contacts", href: "/contacts" },
  { label: "Blog", href: "/blog" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-2xl font-bold text-white">Aritoon</p>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Your gateway to Armenian hospitality. Tours, accommodation, transfers, and
              unforgettable experiences across Armenia.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Contact us</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>96, Nalbandyan str., Yerevan</li>
              <li>+374 10 54 60 40</li>
              <li>contact@aritoon.com</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Quick links</h3>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/50 md:flex-row">
          <p>2002 – {new Date().getFullYear()}, © Aritoon LLC</p>
          <div className="flex gap-3">
            {["Visa", "Mastercard", "Amex"].map((method) => (
              <span
                key={method}
                className="rounded border border-white/20 px-2 py-1 text-xs"
              >
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
