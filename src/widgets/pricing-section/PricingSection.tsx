import { SectionLabel } from "@/shared/ui";
import { services, pricingNote } from "@/shared/content";
import { ServiceRow } from "@/entities/service";

/** Label 03 — tabela real (1.7fr/0.9fr/0.9fr), colapsa para 1 coluna abaixo de 720px. */
export function PricingSection() {
  return (
    <section id="servicos" className="mx-auto max-w-6xl px-6 py-20">
      <SectionLabel number="03">Serviços</SectionLabel>
      <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold text-bone min-[720px]:text-4xl">
        O que construímos, e o investimento envolvido.
      </h2>

      <div className="mt-14 grid grid-cols-1 min-[721px]:grid-cols-[1.7fr_0.9fr_0.9fr]">
        <div className="hidden bg-surface-2 px-6 py-3 font-mono text-sm uppercase tracking-wide text-stone min-[721px]:block">
          Serviço
        </div>
        <div className="hidden bg-surface-2 px-6 py-3 font-mono text-sm uppercase tracking-wide text-stone min-[721px]:block">
          Prazo
        </div>
        <div className="hidden bg-surface-2 px-6 py-3 font-mono text-sm uppercase tracking-wide text-stone min-[721px]:block">
          A partir de
        </div>
        {services.map((service) => (
          <ServiceRow key={service.name} service={service} />
        ))}
      </div>

      <p className="mt-6 max-w-2xl text-sm text-stone">{pricingNote}</p>
    </section>
  );
}
