import type { Service } from "../model/Service";

interface ServiceRowProps {
  service: Service;
}

/**
 * Linha da tabela de serviços — 3 células que participam na grelha do
 * widget pai (`1.7fr 0.9fr 0.9fr`). Abaixo de 720px a grelha colapsa
 * para 1 coluna e cada célula ganha um prefixo via ::before.
 */
export function ServiceRow({ service }: ServiceRowProps) {
  return (
    <>
      <div className="border-t border-hair bg-surface px-4 py-4 min-[721px]:px-6">
        <p className="font-body font-semibold text-bone">{service.name}</p>
        <p className="mt-1 text-sm text-stone">{service.description}</p>
      </div>
      <div className="border-t border-hair px-4 py-4 font-mono text-sm text-stone before:mr-1 before:text-stone/70 before:content-['Prazo_·_'] min-[721px]:px-6 min-[721px]:before:content-none">
        {service.timeline}
      </div>
      <div className="border-t border-hair px-4 py-4 font-mono text-sm font-semibold text-brass-bright before:mr-1 before:font-normal before:text-stone before:content-['A_partir_de_·_'] min-[721px]:px-6 min-[721px]:before:content-none">
        {service.priceFrom}
      </div>
    </>
  );
}
