import { SonaMark, Button } from "@/shared/ui";
import { hero } from "@/shared/content";

/** Sona animado à direita oculto abaixo de 820px; anima uma única vez. */
export function Hero() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-start gap-12 px-6 py-20 min-[820px]:flex-row min-[820px]:items-center min-[820px]:justify-between min-[820px]:py-28">
      <div className="max-w-xl">
        <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.15em] text-stone">
          <span className="h-px w-[18px] bg-brass" aria-hidden="true" />
          {hero.eyebrow}
        </p>
        <h1 className="mt-6 font-display text-[clamp(32px,5.4vw,54px)] font-black leading-[1.05] text-bone">
          {hero.headlinePrefix}
          <span className="text-brass-bright">{hero.headlineEmphasis}</span>
          {hero.headlineSuffix}
        </h1>
        <p className="mt-6 max-w-md text-base text-stone">{hero.lede}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href={hero.ctaPrimary.href} variant="solid">
            {hero.ctaPrimary.label}
          </Button>
          <Button href={hero.ctaSecondary.href} variant="ghost">
            {hero.ctaSecondary.label}
          </Button>
        </div>
      </div>
      <div className="hidden shrink-0 min-[820px]:block" aria-hidden="true">
        <SonaMark size={200} showDots animate />
      </div>
    </section>
  );
}
