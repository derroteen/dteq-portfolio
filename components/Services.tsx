export default function Services() {
  const services = [
    {
      title: "Software & Web Systems",
      description:
        "Custom platforms, procurement and billing software, and web systems built for how your organization actually works.",
    },
    {
      title: "Hardware Supply",
      description:
        "POS terminals, computers, workstations, and printers for offices and business premises.",
    },
    {
      title: "Accounting & Financial Services",
      description:
        "Bookkeeping, cost accounting, and financial accounting support, grounded in an Accounting & Finance background, not just software skills.",
    },
  ];

  return (
    <section className="px-6 md:px-16 py-20 border-b border-line/20">
      <p className="font-mono text-blue text-xs tracking-[0.3em] uppercase mb-10">
        What We Do
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-surface border border-line rounded-sm p-6"
          >
            <h3 className="font-display text-xl mb-3 text-paper">
              {service.title}
            </h3>
            <p className="text-paper/75 leading-relaxed text-sm">
              {service.description}
            </p>
          </div>
        ))}
      </div>
      <p className="font-mono text-xs text-blue text-center mt-8">
        Registered on Kenya&apos;s e-Government Procurement (e-GP) platform.
      </p>
    </section>
  );
}
