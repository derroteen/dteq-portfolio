type StampTone = "green" | "red" | "brass";

const toneStyles: Record<StampTone, string> = {
  green: "border-stampGreen text-stampGreen",
  red: "border-stampRed text-stampRed",
  brass: "border-brass text-brass",
};

export default function StatusStamp({
  label,
  tone,
}: {
  label: string;
  tone: StampTone;
}) {
  return (
    <div
      className={`inline-block -rotate-6 border-[3px] rounded-sm px-3 py-1 font-mono text-[11px] tracking-[0.2em] uppercase ${toneStyles[tone]}`}
      style={{ boxShadow: "0 0 0 2px transparent" }}
    >
      {label}
    </div>
  );
}
