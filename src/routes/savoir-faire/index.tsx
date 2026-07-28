import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { DOMAINS, domainCover } from "@/lib/site-data";
import { photo } from "@/lib/photos";

export const Route = createFileRoute("/savoir-faire/")({
  component: SavoirFaire,
  head: () => ({
    meta: [
      { title: "Nos savoir-faire — 12 domaines d'expertise | SIAT-Engineering" },
      {
        name: "description",
        content:
          "Études techniques, transports, ouvrages d'art, bâtiments, hydraulique, électricité, environnement, études économiques : les 12 domaines d'expertise du Groupe SIAT-Engineering.",
      },
      { property: "og:title", content: "Nos savoir-faire — 12 domaines d'expertise" },
      {
        property: "og:description",
        content: "Les 12 domaines d'expertise du Groupe SIAT-Engineering en Afrique.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/savoir-faire" },
    ],
    links: [{ rel: "canonical", href: "/savoir-faire" }],
  }),
});

function SavoirFaire() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Nos savoir-faire"
        title="12 domaines d'expertise"
        intro="De l'étude préalable à la réception des ouvrages, une maîtrise complète du cycle de projet."
        image={photo("img_p8_5")}
      />
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DOMAINS.map((d) => (
            <Link
              key={d.slug}
              to="/savoir-faire/$slug"
              params={{ slug: d.slug }}
              className="card-lift group flex flex-col overflow-hidden rounded-sm border border-border bg-card"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={domainCover(d)}
                  alt={d.titre}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-0 top-0 bg-accent px-3 py-1.5 font-display text-xs font-bold text-accent-foreground">
                  {String(d.numero).padStart(2, "0")}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="font-display text-lg font-semibold text-foreground group-hover:text-accent">
                  {d.titre}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {d.accroche}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-widest text-accent">
                  Découvrir <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
