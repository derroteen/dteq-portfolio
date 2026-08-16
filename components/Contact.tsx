export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 md:px-16 py-24 flex flex-col items-start"
    >
      <p className="font-mono text-brass text-xs tracking-[0.3em] uppercase mb-6">
        Get in touch
      </p>
      <h2 className="font-display italic text-3xl md:text-5xl mb-8 max-w-xl">
        Have a project in mind? Let&apos;s talk about it.
      </h2>
      <div className="flex flex-wrap gap-4">
        <a
          href="https://wa.me/YOUR_NUMBER_HERE"
          className="font-mono text-sm uppercase tracking-wide border border-brass text-brass px-6 py-3 rounded-sm hover:bg-brass hover:text-ink transition-colors"
        >
          Chat on WhatsApp
        </a>
        <a
          href="mailto:YOUR_EMAIL_HERE"
          className="font-mono text-sm uppercase tracking-wide border border-paper/40 text-paper px-6 py-3 rounded-sm hover:border-paper transition-colors"
        >
          Email me
        </a>
      </div>
    </section>
  );
}
