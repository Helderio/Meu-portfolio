import Link from "next/link";
import { SonaMark } from "@/shared/ui";
import { navLinks } from "@/shared/content";

/** Sticky, blur de fundo, wordmark WA.S. Links escondidos abaixo de 720px — sem hamburger. */
export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-hair bg-[rgba(20,17,13,0.9)] backdrop-blur-[10px]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <SonaMark size={20} showDots={false} />
          <span className="font-display text-lg font-black text-bone">
            WA<span className="text-brass">.</span>S
          </span>
        </Link>
        <nav aria-label="Secções">
          <ul className="hidden items-center gap-8 min-[721px]:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-mono text-[12.5px] text-stone transition-colors hover:text-brass-bright"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
