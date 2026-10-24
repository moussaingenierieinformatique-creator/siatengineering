import { ArrowUpRight, Globe } from "lucide-react";
import { SITE } from "@/lib/site-data";

/**
 * Bandeau permanent rappelant l'adresse de consultation du site,
 * utilisée tant que groupesiatengineering.com n'est pas configuré.
 */
export function OfficialSiteBar() {
  return (
    <div className="relative z-60 bg-navy-deep text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-2 px-5 py-3 text-center sm:flex-row sm:gap-4 lg:px-8">
        <p className="text-sm leading-snug text-primary-foreground/80">
          Retrouvez tout le site de{" "}
          <span className="font-semibold text-primary-foreground">
            Groupe SIAT-Engineering
          </span>{" "}
          à cette adresse&nbsp;:
        </p>
        <a
          href={SITE.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-sm bg-accent px-4 py-1.5 text-sm font-semibold text-accent-foreground shadow-sm transition-opacity hover:opacity-90"
        >
          <Globe className="h-4 w-4" aria-hidden="true" />
          <span className="underline decoration-primary-foreground/40 underline-offset-2">
            {SITE.urlLabel}
          </span>
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
