import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { DOMAINS, getDomain, type Domain } from "@/lib/site-data";
import { photo } from "@/lib/photos";

export const Route = createFileRoute("/savoir-faire/$slug")({
  loader: ({ params }): Domain => {
    const domain = getDomain(params.slug);
    if (!domain) throw notFound();
    return domain;
  },
  component: DomainePage,
  head: ({ params, loaderData }) => {
    const titre = loaderData?.titre ?? "Domaine d'expertise";
    const accroche = loaderData?.accroche ?? "";
    return {
      meta: [
        { title: `${titre} — SIAT-Engineering` },
        { name: "description", content: accroche },
        { property: "og:title", content: `${titre} — SIAT-Engineering` },
        { property: "og:description", content: accroche },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/savoir-faire/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/savoir-faire/${params.slug}` }],
    };
  },
});

function DomainePage() {
  const domain = Route.useLoaderData() as Domain;
  const idx = DOMAINS.findIndex((d) => d.slug === domain.slug);
  const next = DOMAINS[(idx + 1) % DOMAINS.length];
  const cover = photo(domain.images[0]);
  const gallery = domain.images.slice(1).map(photo);

  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-navy-deep">
        <img
          src={cover}
          alt={domain.titre}
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <Link
            to="/savoir-faire"
            className="inline-flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Nos savoir-faire
          </Link>
          <p className="eyebrow mt-8">Domaine {String(domain.numero).padStart(2, "0")}</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold text-primary-foreground lg:text-5xl">
            {domain.titre}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
            {domain.accroche}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="eyebrow">Notre méthodologie</p>
            <ol className="mt-8 space-y-8">
              {domain.etapes.map((e, i) => (
                <li key={e.titre} className="flex gap-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-primary font-display text-sm font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <div>
                    <h2 className="font-display text-lg font-semibold text-foreground">{e.titre}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.texte}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <aside className="h-fit rounded-sm border border-border bg-surface p-8">
            <h2 className="font-display text-lg font-semibold text-foreground">
              Un projet dans ce domaine ?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Nos équipes pluridisciplinaires vous répondent sous 48 heures depuis l'une de nos six
              implantations.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              {["Études techniques complètes", "Supervision de travaux", "Standards internationaux"].map(
                (t) => (
                  <li key={t} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-accent" /> {t}
                  </li>
                ),
              )}
            </ul>
            <Link
              to="/contact"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              Nous consulter <ArrowRight className="h-4 w-4" />
            </Link>
          </aside>
        </div>
      </section>

      {gallery.length > 0 && (
        <section className="bg-surface py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <p className="eyebrow">Sur le terrain</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {gallery.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={`${domain.titre} — intervention SIAT-Engineering ${i + 1}`}
                  loading="lazy"
                  className="h-60 w-full rounded-sm object-cover shadow-[var(--shadow-card)]"
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <Link
          to="/savoir-faire/$slug"
          params={{ slug: next.slug }}
          className="card-lift flex flex-col justify-between gap-4 rounded-sm border border-border bg-card p-8 sm:flex-row sm:items-center"
        >
          <div>
            <p className="eyebrow">Domaine suivant</p>
            <p className="mt-2 font-display text-xl font-semibold text-foreground">{next.titre}</p>
          </div>
          <ArrowRight className="h-6 w-6 text-accent" />
        </Link>
      </section>
    </SiteLayout>
  );
}
