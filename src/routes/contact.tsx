import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone, Send, Check, Navigation, ChevronDown } from "lucide-react";
import { SiteLayout, PageHero, SectionTitle } from "@/components/site/SiteLayout";
import { AfricaPresenceMap } from "@/components/site/AfricaPresenceMap";
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
          "Contactez le Groupe SIAT-Engineering : formulaire, coordonnées de nos sept implantations au Cameroun, RCA, Tchad, Niger, Mali, Nigeria et Mauritanie. Réponse sous 48 heures.",
      },
      { property: "og:title", content: "Contact — Groupe SIAT-Engineering" },
      {
        property: "og:description",
        content: "Sept implantations en Afrique à votre écoute. Réponse sous 48 heures.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

const inputClass =
  "w-full rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent";

const FLAGS: Record<string, string> = {
  Cameroun: "https://flagcdn.com/w160/cm.png",
  "République Centrafricaine": "https://flagcdn.com/w160/cf.png",
  Tchad: "https://flagcdn.com/w160/td.png",
  Niger: "https://flagcdn.com/w160/ne.png",
  Mali: "https://flagcdn.com/w160/ml.png",
  Nigeria: "https://flagcdn.com/w160/ng.png",
  Mauritanie: "https://flagcdn.com/w160/mr.png",
};

function Contact() {
  const [sent, setSent] = useState(false);
  const [showMap, setShowMap] = useState(false);

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
        intro="Nos équipes vous répondent sous 48 heures depuis l'une de nos sept implantations."
        images={[
          photo("img_p7_1"),
          photo("img_p9_2"),
          photo("img_p10_2"),
          photo("img_p12_2"),
          photo("img_p13_6"),
        ]}
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

            <div className="mt-10">
              <button
                type="button"
                onClick={() => setShowMap((v) => !v)}
                aria-expanded={showMap}
                aria-label={showMap ? "Masquer la carte d'Afrique" : "Afficher la carte d'Afrique"}
                title={showMap ? "Masquer la carte" : "Afficher la carte"}
                className="h-2.5 w-2.5 rounded-full bg-border opacity-40 transition-opacity hover:opacity-100"
              />
              {showMap && (
                <div className="mt-5 rounded-sm border border-border bg-card p-5">
                  <p className="eyebrow">Notre présence en Afrique</p>
                  <div className="mt-4 flex justify-center">
                    <AfricaPresenceMap />
                  </div>
                </div>
              )}
            </div>
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
            <div className="mt-8 space-y-6">
              {COUNTRIES.map((c) => (
                <div
                  key={c.pays}
                  className="group relative overflow-hidden rounded-sm border border-border bg-card"
                >
                  <div className="flag-silk relative h-28 overflow-hidden bg-surface">
                    <img
                      src={FLAGS[c.pays]}
                      alt={`Drapeau ${c.pays}`}
                      loading="lazy"
                      className="animate-flag-wave h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-navy-deep/85 to-transparent p-4">
                      <h3 className="font-display text-lg font-bold text-primary-foreground">
                        {c.pays}
                      </h3>
                      <p className="text-xs uppercase tracking-widest text-primary-foreground/85">
                        {c.statut} — {c.ville}
                      </p>
                    </div>
                  </div>

                  <div className="p-6">
                    {c.contacts.map((p) => (
                      <div key={p.nom} className="mt-6 first:mt-0">
                        <div className="relative overflow-hidden rounded-sm">
                          {p.photo ? (
                            <img
                              src={p.photo}
                              alt={p.nom}
                              loading="lazy"
                              className="h-64 w-full object-cover"
                            />
                          ) : (
                            <div
                              aria-hidden="true"
                              className="flex h-64 w-full items-center justify-center bg-surface font-display text-5xl font-bold text-accent"
                            >
                              {p.nom
                                .split(" ")
                                .slice(0, 2)
                                .map((w) => w[0])
                                .join("")}
                            </div>
                          )}
                          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-navy-deep/85 px-4 py-3">
                            <p className="font-display text-sm font-semibold text-primary-foreground">
                              {p.nom}
                            </p>
                            <ChevronDown className="h-5 w-5 shrink-0 text-accent transition-transform duration-300 group-hover:rotate-180" />
                          </div>
                          <div className="pointer-events-none absolute inset-0 flex flex-col justify-center gap-1.5 bg-navy-deep/92 p-5 opacity-0 transition-opacity duration-300 group-hover:pointer-events-auto group-hover:opacity-100">
                            {p.poste && (
                              <p className="text-xs uppercase tracking-widest text-accent">
                                {p.poste}
                              </p>
                            )}
                            {p.email && (
                              <a
                                href={`mailto:${p.email}`}
                                className="flex items-center gap-2 break-all text-sm text-primary-foreground hover:text-accent"
                              >
                                <Mail className="h-4 w-4 shrink-0 text-accent" /> {p.email}
                              </a>
                            )}
                            <p className="flex items-start gap-2 text-sm text-primary-foreground/85">
                              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                              <span>{p.telephones.join(" / ")}</span>
                            </p>
                            <p className="flex items-start gap-2 text-sm text-primary-foreground/85">
                              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {c.ville}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}

                    <div className="mt-5">
                      <iframe
                        title={`Carte du bureau de ${c.ville}`}
                        src={`https://maps.google.com/maps?q=${encodeURIComponent(c.mapQuery)}&z=12&output=embed`}
                        loading="lazy"
                        className="h-44 w-full rounded-sm border border-border"
                      />
                      <a
                        href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(c.mapQuery)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-2 rounded-sm border border-accent px-4 py-2 font-display text-xs font-semibold uppercase tracking-widest text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <Navigation className="h-4 w-4" /> Itinéraire
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
