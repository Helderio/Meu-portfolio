import { SectionLabel } from "@/shared/ui";
import { aboutParagraphs, aboutStats } from "@/shared/content";

/** Label 04 — dois parágrafos + coluna de estatísticas com borda superior por item. */
export function AboutSection() {
  return (
    <section id="sobre" className="mx-auto max-w-6xl px-6 py-20">
      <SectionLabel number="04">Sobre</SectionLabel>
      <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold text-bone md:text-4xl">
        Um estúdio de engenharia com raiz angolana.
      </h2>

      <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-[1.5fr_1fr]">
        <div className="space-y-4">
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph} className="max-w-xl text-stone">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-1">
          {aboutStats.map((stat) => (
            <div key={stat.label} className="border-t border-hair pt-4">
              <p className="font-display text-2xl font-bold text-brass-bright">{stat.value}</p>
              <p className="mt-1 font-mono text-sm uppercase tracking-wide text-stone">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
