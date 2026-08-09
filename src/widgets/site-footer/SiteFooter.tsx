import { SonaDivider } from "@/shared/ui";
import { site, footerContent } from "@/shared/content";

/** Divisor sona → nome/localização em mono + link de email em latão claro. */
export function SiteFooter() {
  return (
    <footer className="mx-auto max-w-6xl px-6 py-16">
      <SonaDivider />
      <div className="mt-10 flex flex-col items-start justify-between gap-6 min-[721px]:flex-row min-[721px]:items-center">
        <p className="font-mono text-sm text-stone">
          {site.studioName} · {site.location}
        </p>
        <a
          href={`mailto:${site.contactEmail}`}
          className="border-b border-brass-bright font-mono text-sm text-brass-bright transition-colors hover:text-brass"
        >
          {footerContent.linkLabel}
        </a>
      </div>
    </footer>
  );
}
