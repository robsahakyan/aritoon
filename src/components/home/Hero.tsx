import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Accommodation",
    description: "Apartments & hotels",
    href: "/accommodation",
    gradient: "from-rose-900/80 to-rose-700/60",
  },
  {
    title: "Tours",
    description: "Group & private tours",
    href: "/tours",
    gradient: "from-emerald-900/80 to-emerald-700/60",
  },
  {
    title: "Transportation",
    description: "Transfers & rentals",
    href: "/transportation",
    gradient: "from-amber-900/80 to-amber-700/60",
  },
  {
    title: "Business Events",
    description: "Venues & support",
    href: "/business-events",
    gradient: "from-slate-900/80 to-slate-700/60",
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=1920&q=80')",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Welcome to Armenia
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            The doors to Armenian hospitality
          </h1>
          <p className="mt-4 text-lg text-muted">
            Discover guided tours, comfortable stays, reliable transfers, and curated
            experiences across Armenia.
          </p>
          <Link
            href="/tours"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Explore tours
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3]"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient}`} />
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <h2 className="text-xl font-bold">{service.title}</h2>
                <p className="mt-1 text-sm text-white/80">{service.description}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
