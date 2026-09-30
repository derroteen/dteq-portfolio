import Image from "next/image";
import StatusStamp from "./StatusStamp";

type Props = {
  index: string; // "01", "02"...
  title: string;
  stampLabel: string;
  stampTone: "teal" | "amber" | "blue";
  before: string;
  built: string;
  stack: string;
  images?: string[];
  url?: string;
  linkLabel?: string;
};

export default function CaseStudy({
  index,
  title,
  stampLabel,
  stampTone,
  before,
  built,
  stack,
  images,
  url,
  linkLabel = "View live site",
}: Props) {
  return (
    <article className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-10 py-14 border-b border-line/20">
      <div className="font-mono text-blue/70 text-sm md:pt-2">{index}</div>

      <div className="bg-surface text-paper rounded-sm border border-line shadow-sm ledger-lines p-6 md:p-10 relative overflow-hidden">
        <div className="flex items-start justify-between gap-4 mb-4">
          <h3 className="font-display text-2xl md:text-3xl">{title}</h3>
          <StatusStamp label={stampLabel} tone={stampTone} />
        </div>

        {images && images.length > 0 && (
          <div className="flex gap-4 overflow-x-auto pb-3 mb-6 snap-x snap-mandatory scrollbar-thin">
            {images.map((src, i) => (
              <div
                key={i}
                className={`relative shrink-0 ${
                  images.length === 1 ? "w-full" : "w-[85%] md:w-[75%]"
                } aspect-video border border-paper/10 rounded-sm overflow-hidden bg-paper/5 snap-start`}
              >
                <Image
                  src={src}
                  alt={`${title} screenshot ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}

        <p className="text-sm md:text-base leading-relaxed mb-3">
          <span className="font-mono uppercase text-xs tracking-wide text-paper/50 block mb-1">
            Before
          </span>
          {before}
        </p>
        <p className="text-sm md:text-base leading-relaxed mb-3">
          <span className="font-mono uppercase text-xs tracking-wide text-paper/50 block mb-1">
            Built
          </span>
          {built}
        </p>
        <p className="font-mono text-xs uppercase tracking-wide text-paper/60 mt-6">
          Stack — {stack}
        </p>
        {url && (
          <div className="mt-3">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-wide text-blue hover:underline inline-flex items-center gap-1"
            >
              {linkLabel} &rarr;
            </a>
          </div>
        )}
      </div>
    </article>
  );
}
