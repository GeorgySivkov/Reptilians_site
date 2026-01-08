const stats = [
  { value: "50+", label: "Projects Shipped" },
  { value: "12", label: "Team Members" },
  { value: "5+", label: "Years Building" },
  { value: "100%", label: "Open Source" },
]

export function Stats() {
  return (
    <section className="border-t border-border/40 bg-secondary/30 py-16">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold tracking-tight md:text-4xl">{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
