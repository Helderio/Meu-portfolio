import { SectionLabel } from "@/shared/ui";
import { methodIntro, methodPrinciples } from "@/shared/content";

/** Label 02 — três princípios em grelha, 1 coluna abaixo de 760px. */
export function MethodSection() {
  return (
    <section id="metodo" className="mx-auto max-w-6xl px-6 py-20">
      <SectionLabel number="02">Método</SectionLabel>
      <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold text-bone min-[720px]:text-4xl">
        Arquitetura definida antes da primeira linha de código.
      </h2>
      <p className="mt-6 max-w-2xl text-stone">{methodIntro}</p>

      <div className="mt-14 grid grid-cols-1 gap-8 min-[761px]:grid-cols-3">
        {methodPrinciples.map((principle) => (
          <div key={principle.number} className="border-t border-hair pt-6">
            <span className="font-mono text-sm text-brass">{principle.number}</span>
            <h3 className="mt-3 font-display text-lg font-bold text-bone">{principle.title}</h3>
            <p className="mt-2 text-sm text-stone">{principle.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
