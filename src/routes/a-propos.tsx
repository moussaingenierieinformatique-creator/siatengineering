import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Quote } from "lucide-react";
import { SiteLayout, PageHero, SectionTitle } from "@/components/site/SiteLayout";
import { COUNTRIES, VALEURS } from "@/lib/site-data";
import { photo } from "@/lib/photos";
import { flagOf } from "@/lib/flags";

import pdgPhoto from "@/assets/pdg-siat.png.asset.json";


export const Route = createFileRoute("/a-propos")({
  component: APropos,
  head: () => ({
    meta: [
      { title: "À propos — Groupe SIAT-Engineering" },
      {
        name: "description",
        content:
          "Le Groupe SIAT-Engineering : société d'ingénierie régionale implantée dans 6 pays d'Afrique, mot du PDG, valeurs et direction générale.",
      },
      { property: "og:title", content: "À propos — Groupe SIAT-Engineering" },
      {
        property: "og:description",
        content:
          "Société d'ingénierie à vocation régionale spécialisée dans les études techniques et la supervision des travaux.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/a-propos" },
    ],
    links: [{ rel: "canonical", href: "/a-propos" }],
  }),
});

function APropos() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="À propos"
        title="Une société d'ingénierie à vocation régionale"
        intro="Études techniques et supervision de travaux pour les projets qui structurent l'Afrique centrale et de l'Ouest."
        images={[
          photo("img_p7_4"),
          photo("img_p8_8"),
          photo("img_p9_1"),
          photo("img_p10_6"),
          photo("img_p11_2"),
        ]}
      />

      <section className="mx-auto max-w-7xl px-5 pt-24 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <SectionTitle eyebrow="2.1 À propos de nous" title="À propos de nous" />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p className="text-block">
                La flexibilité de son organisation adossée à des compétences internes hautement
                qualifiées, les multiples relations tissées avec les leaders de l'ingénierie, et son
                association à un réseau international et sélectif de consultants confèrent au Groupe
                SIAT-Engineering toute la capacité requise pour répondre aux attentes et exigences
                les plus pointues de ses clients et de son marché.
              </p>
              <p className="text-block">
                Afin d'accroître la valeur ajoutée de son capital humain, Groupe SIAT-Engineering
                place la qualité au cœur de ses prestations et de son organisation. Celle-ci
                constitue une réalité et un engagement, concrétisés par l'existence de modes de
                gestion rigoureux et des ressources techniques, logicielles et documentaires sans
                cesse actualisées.
              </p>
            </div>
          </div>
          <img
            src={photo("img_p7_2")}
            alt="Réunion d'équipe pluridisciplinaire du Groupe SIAT-Engineering autour des plans"
            loading="lazy"
            className="h-full min-h-72 w-full rounded-sm object-cover shadow-[var(--shadow-card)]"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <img
              src={pdgPhoto.url}
              alt="Portrait du Président Directeur Général du Groupe SIAT-Engineering"
              loading="lazy"
              className="h-full max-h-[28rem] w-full rounded-sm object-cover object-center shadow-[var(--shadow-card)]"
            />
          </div>
          <div>
            <SectionTitle eyebrow="2.2 Mot du PDG" title="Mot du PDG" />
            <Quote className="mt-6 h-8 w-8 text-accent" />
            <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p className="text-block">
                Groupe SIAT-Engineering développe une forte expertise dans les métiers de
                l'ingénierie/conseil de la sous-région. Ses références prestigieuses et multiples
                confortent sa position d'acteur majeur au service du développement.
              </p>
              <p className="text-block">
                Notre expérience, notre maîtrise des techniques et des technologies nous permettent
                de donner corps aux idées, de transformer les projets en réalisations.
              </p>
              <p className="text-block">
                Notre approche pluridisciplinaire intègre les multiples facettes d'un projet, dans
                une recherche permanente de la qualité au service de nos clients et du respect du
                développement durable.
              </p>
              <p className="text-block">
                Cette démarche n'a été possible que par l'engagement de tous nos collaborateurs, la
                confiance de nos clients et le soutien de nos partenaires.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-surface py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle
            eyebrow="2.3 Notre présence régionale"
            title="Sept implantations, un seul standard technique"
          />
          <div className="mt-10 overflow-x-auto rounded-sm border border-border bg-card">
            <table className="w-full min-w-[42rem] text-left text-sm">
              <thead className="surface-navy">
                <tr>
                  {["Pays", "Statut", "Ville", "Téléphone"].map((h) => (
                    <th
                      key={h}
                      className="px-5 py-4 font-display text-xs uppercase tracking-widest text-primary-foreground"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COUNTRIES.map((c) => (
                  <tr key={c.pays} className="border-t border-border">
                    <td className="px-5 py-4 font-display font-semibold text-foreground">{c.pays}</td>
                    <td className="px-5 py-4 text-muted-foreground">{c.statut}</td>
                    <td className="px-5 py-4 text-muted-foreground">{c.ville}</td>
                    <td className="px-5 py-4 text-muted-foreground">{c.telephones.join(" / ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>


      <section className="surface-navy py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle eyebrow="2.4 Nos valeurs" title="Ce qui guide nos engagements" light />
          <ol className="mt-12 grid gap-px bg-primary-foreground/15 sm:grid-cols-2">
            {VALEURS.map((v, i) => (
              <li key={v} className="bg-navy-deep p-8">
                <span className="font-display text-3xl font-bold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 text-sm leading-relaxed text-primary-foreground/80">{v}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <SectionTitle eyebrow="2.5 Direction générale" title="Nos directions par pays" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COUNTRIES.map((c) => {
            const portrait = c.contacts.find((k) => k.photo)?.photo;
            const flag = flagOf(c.pays);
            return (
              <div
                key={c.pays}
                className="card-lift overflow-hidden rounded-sm border border-border bg-card"
              >
                {/* Bandeau d'informations posé sur le drapeau du pays */}
                <div className="relative isolate overflow-hidden">
                  {flag && (
                    <img
                      src={flag}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-navy-deep/85" aria-hidden="true" />
                  <div className="relative p-5 [text-shadow:0_2px_6px_rgba(0,0,0,0.85)]">
                    <h3 className="font-display text-lg font-bold text-primary-foreground">
                      {c.directeur}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-primary-foreground">
                      Directeur Général — {c.ville}
                    </p>
                    <p className="mt-2 font-display text-xs font-bold uppercase tracking-widest text-primary-foreground">
                      {c.pays}
                    </p>
                    <a
                      href={`mailto:${c.emailDirection}`}
                      className="mt-3 block break-all text-sm font-medium text-primary-foreground underline-offset-4 hover:underline"
                    >
                      {c.emailDirection}
                    </a>
                  </div>
                </div>
                <div className="relative h-60 w-full overflow-hidden bg-surface">
                  {portrait ? (
                    <img
                      src={portrait}
                      alt={`${c.directeur} — Directeur ${c.pays}`}
                      loading="lazy"
                      className="h-full w-full object-cover object-[center_25%]"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center font-display text-4xl font-bold text-primary/40">
                      {c.pays.slice(0, 2).toUpperCase()}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <Link
          to="/savoir-faire"
          className="mt-12 inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Découvrir nos 12 domaines d'expertise <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </SiteLayout>
  );
}
