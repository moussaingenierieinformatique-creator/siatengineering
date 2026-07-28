import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone, Send, Check } from "lucide-react";
import { SiteLayout, PageHero, SectionTitle } from "@/components/site/SiteLayout";
import { COUNTRIES, SITE } from "@/lib/site-data";
import { photo } from "@/lib/photos";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact — Groupe SIAT-Engineering" },
      {
        name: "description",
        content:
          "Contactez le Groupe SIAT-Engineering : formulaire, coordonnées de nos six implantations au Cameroun, RCA, Tchad, Niger, Mali et Nigeria. Réponse sous 48 heures.",
      },
      { property: "og:title", content: "Contact — Groupe SIAT-Engineering" },
      {
        property: "og:description",
        content: "Six implantations en Afrique à votre écoute. Réponse sous 48 heures.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

const inputClass =
  "w-full rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent";

function Contact() {
  const [sent, setSent] = useState(false);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        title="Parlons de votre projet"
        intro="Nos équipes vous répondent sous 48 heures depuis l'une de nos six implantations."
        image={photo("img_p7_1")}
      />

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <SectionTitle eyebrow="Écrivez-nous" title="Formulaire de contact" />
            <form onSubmit={submit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="nom" className="mb-2 block text-sm font-medium text-foreground">
                    Nom complet
                  </label>
                  <input id="nom" name="nom" required className={inputClass} />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input id="email" name="email" type="email" required className={inputClass} />
                </div>
              </div>
              <div>
                <label htmlFor="sujet" className="mb-2 block text-sm font-medium text-foreground">
                  Sujet
                </label>
                <input id="sujet" name="sujet" required className={inputClass} />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea id="message" name="message" rows={6} required className={inputClass} />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-sm bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
              >
                Envoyer le message <Send className="h-4 w-4" />
              </button>
              {sent && (
                <p className="inline-flex items-center gap-2 text-sm text-primary">
                  <Check className="h-4 w-4 text-accent" /> Merci, votre message a bien été pris en
                  compte. Nous revenons vers vous sous 48 heures.
                </p>
              )}
            </form>
          </div>

          <div>
            <div className="rule-accent bg-surface p-6">
              <p className="text-sm text-muted-foreground">Adresse email officielle</p>
              <a
                href={`mailto:${SITE.email}`}
                className="mt-1 flex items-center gap-2 font-display text-lg font-semibold text-primary hover:text-accent"
              >
                <Mail className="h-5 w-5 text-accent" /> {SITE.email}
              </a>
            </div>
            <div className="mt-8 space-y-5">
              {COUNTRIES.map((c) => (
                <div key={c.pays} className="rounded-sm border border-border bg-card p-6">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-base font-semibold text-foreground">
                      {c.pays}
                    </h3>
                    <span className="text-xs uppercase tracking-widest text-accent">{c.statut}</span>
                  </div>
                  <p className="mt-3 flex items-start gap-2 text-sm text-muted-foreground">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {c.ville}
                  </p>
                  <p className="mt-2 flex items-start gap-2 text-sm text-muted-foreground">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{c.telephones.join(" / ")}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
