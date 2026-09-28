export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 md:px-16 py-24 flex flex-col items-start bg-navy"
    >
      <p className="font-mono text-blue text-xs tracking-[0.3em] uppercase mb-6">
        Get in touch
      </p>
      <h2 className="font-display text-3xl md:text-5xl mb-8 max-w-xl text-white">
        Have a project in mind? Let&apos;s talk about it.
      </h2>
      <div className="flex flex-wrap gap-4">
        <a
          href="https://wa.me/254716555311"
          className="font-mono text-sm uppercase tracking-wide border border-white/40 text-white px-6 py-3 rounded-sm hover:bg-white hover:text-navy transition-colors"
        >
          Chat on WhatsApp
        </a>
        <a
          href="mailto:infodteqsolutions@gmail.com"
          className="font-mono text-sm uppercase tracking-wide border border-white/40 text-white px-6 py-3 rounded-sm hover:bg-white hover:text-navy transition-colors"
        >
          Email me
        </a>
      </div>
    </section>
  );
}
