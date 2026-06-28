const stats = [
  { value: "62,000+", label: "Accommodation orders", period: "24 years" },
  { value: "750,000+", label: "Travellers on our tours", period: "24 years" },
  { value: "168,000+", label: "Transportation users", period: "24 years" },
  { value: "2,200+", label: "Business events organised", period: "24 years" },
];

export function StatsSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-bold text-foreground">About Aritoon</h2>
          <p className="mt-3 leading-relaxed text-muted">
            A travel company in Yerevan with decades of experience, specializing in guided
            tours and day trips in Armenia. We arrange group and private tours, tour packages,
            transfers, apartment rentals, and hotel bookings.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border bg-surface p-6 text-center"
            >
              <p className="text-3xl font-bold text-primary">{stat.value}</p>
              <p className="mt-2 text-sm font-medium text-foreground">{stat.label}</p>
              <p className="mt-1 text-xs text-muted">in {stat.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
