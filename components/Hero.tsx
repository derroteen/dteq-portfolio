export default function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center px-6 md:px-16 border-b border-rule/30">
      <p className="font-mono text-blue text-xs tracking-[0.3em] uppercase mb-6">
        DTK360 Softwares Limited — Ledger No. 01
      </p>
      <h1 className="font-display text-4xl md:text-6xl leading-tight max-w-3xl text-navy">
        Web systems that help Kenyan chamas, associations, and campus
        businesses manage members, payments, and records —{" "}
        <span className="text-teal">without the spreadsheet
        chaos.</span>
      </h1>
      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="#work"
          className="font-mono text-sm uppercase tracking-wide border border-blue text-blue px-6 py-3 rounded-sm hover:bg-blue hover:text-white transition-colors"
        >
          View my work
        </a>
        <a
          href="#contact"
          className="font-mono text-sm uppercase tracking-wide border border-navy/40 text-navy px-6 py-3 rounded-sm hover:border-navy transition-colors"
        >
          Chat on WhatsApp
        </a>
      </div>
    </section>
  );
}
