import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Check, Upload } from "lucide-react";
import { SiteLayout, PageHero, SectionTitle } from "@/components/site/SiteLayout";
import { photo } from "@/lib/photos";

export const Route = createFileRoute("/carriere")({
  component: Carriere,
  head: () => ({
    meta: [
      { title: "Carrière — Rejoindre le Groupe SIAT-Engineering" },
      {
        name: "description",
        content:
          "Rejoignez les équipes pluridisciplinaires du Groupe SIAT-Engineering : déposez votre candidature spontanée avec CV et lettre de motivation.",
      },
      { property: "og:title", content: "Carrière — Groupe SIAT-Engineering" },
      {
        property: "og:description",
        content: "Candidature spontanée : ingénierie, hydraulique, transport, environnement.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/carriere" },
    ],
    links: [{ rel: "canonical", href: "/carriere" }],
  }),
});

const inputClass =
  "w-full rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent";

function Carriere() {
  const [sent, setSent] = useState(false);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Carrière"
        title="Construire l'Afrique de demain, avec nous"
        intro="Ingénieurs, techniciens, experts environnement ou économistes : nos équipes pluridisciplinaires se renforcent en continu."
        image={photo("img_p12_5")}
      />

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <SectionTitle eyebrow="Candidature" title="Déposer votre dossier" />
            <form onSubmit={submit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="c-nom" className="mb-2 block text-sm font-medium text-foreground">
                    Nom complet
                  </label>
                  <input id="c-nom" name="nom" required className={inputClass} />
                </div>
                <div>
                  <label htmlFor="c-email" className="mb-2 block text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input id="c-email" name="email" type="email" required className={inputClass} />
                </div>
              </div>
              <div>
                <label htmlFor="c-poste" className="mb-2 block text-sm font-medium text-foreground">
                  Poste souhaité
                </label>
                <input id="c-poste" name="poste" required className={inputClass} />
              </div>
              <div>
                <label htmlFor="c-cv" className="mb-2 block text-sm font-medium text-foreground">
                  CV (PDF)
                </label>
                <input
                  id="c-cv"
                  name="cv"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  required
                  className="w-full rounded-sm border border-dashed border-input bg-surface px-4 py-3 text-sm file:mr-4 file:rounded-sm file:border-0 file:bg-primary file:px-4 file:py-2 file:text-sm file:font-medium file:text-primary-foreground"
                />
              </div>
              <div>
                <label htmlFor="c-lm" className="mb-2 block text-sm font-medium text-foreground">
                  Lettre de motivation
                </label>
                <textarea id="c-lm" name="motivation" rows={6} required className={inputClass} />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-sm bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
              >
                Envoyer ma candidature <Upload className="h-4 w-4" />
              </button>
              {sent && (
                <p className="inline-flex items-center gap-2 text-sm text-primary">
                  <Check className="h-4 w-4 text-accent" /> Merci, votre candidature a bien été
                  enregistrée.
                </p>
              )}
            </form>
          </div>
          <div className="space-y-4">
            <img
              src={photo("img_p7_2")}
              alt="Équipe SIAT-Engineering au travail en bureau d'études"
              loading="lazy"
              className="h-72 w-full rounded-sm object-cover shadow-[var(--shadow-card)]"
            />
            <div className="rule-accent bg-surface p-6">
              <h2 className="font-display text-lg font-semibold text-foreground">
                Travailler chez SIAT-Engineering
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Des projets structurants dans six pays, des équipes pluridisciplinaires et des
                méthodes calées sur les standards internationaux.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
