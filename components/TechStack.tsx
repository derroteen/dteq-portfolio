export default function TechStack() {
  const skills = [
    "Next.js",
    "Supabase",
    "TypeScript",
    "Tailwind",
    "Prisma",
    "Fastify",
    "React Native",
  ];

  return (
    <section className="px-6 md:px-16 py-12 border-b border-line/20">
      <p className="font-mono text-blue text-xs tracking-[0.3em] uppercase mb-6">
        Tech Stack
      </p>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="font-mono text-xs uppercase tracking-wide bg-surface border border-line text-paper px-4 py-2 rounded-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
