import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Linkedin, Facebook } from "lucide-react";
import logo from "@/assets/logo-siat.jpg.asset.json";
import { COUNTRIES, DOMAINS, SITE } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="surface-navy mt-24">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr_1.4fr]">
          <div>
            <img
              src={logo.url}
              alt="Logo Groupe SIAT-Engineering"
              width={320}
              height={200}
              loading="lazy"
              className="h-24 w-auto mix-blend-screen [filter:invert(1)_hue-rotate(180deg)_saturate(1.25)_brightness(1.05)]"
            />
            <p className="text-block mt-5 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
              {SITE.baseline} Bureau d'études techniques et de supervision de travaux, présent dans
              sept pays d'Afrique centrale et de l'Ouest.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="rounded-sm border border-primary-foreground/25 p-2 transition-colors hover:border-accent hover:bg-accent"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="rounded-sm border border-primary-foreground/25 p-2 transition-colors hover:border-accent hover:bg-accent"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-primary-foreground">
              Navigation
            </h3>
            <ul className="mt-5 space-y-2.5 text-sm text-primary-foreground/70">
              {[
                { to: "/", label: "Accueil" },
                { to: "/a-propos", label: "À propos" },
                { to: "/savoir-faire", label: "Nos savoir-faire" },
                { to: "/contact", label: "Contact" },
                { to: "/carriere", label: "Carrière" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="transition-colors hover:text-primary-foreground">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mt-8 font-display text-sm font-semibold uppercase tracking-widest text-primary-foreground">
              Domaines
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/60">
              {DOMAINS.map((d) => (
                <li key={d.slug}>
                  <Link
                    to="/savoir-faire/$slug"
                    params={{ slug: d.slug }}
                    className="transition-colors hover:text-primary-foreground"
                  >
                    {d.titre}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-primary-foreground">
              Nos implantations
            </h3>
            <ul className="mt-5 grid gap-5 sm:grid-cols-2">
              {COUNTRIES.map((c) => (
                <li key={c.pays} className="text-sm">
                  <p className="font-display font-semibold text-primary-foreground">{c.pays}</p>
                  <p className="mt-1 flex items-start gap-2 text-primary-foreground/65">
                    <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                    {c.ville} — {c.statut}
                  </p>
                  <p className="mt-1 flex items-start gap-2 text-primary-foreground/65">
                    <Phone className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                    <span>{c.telephones.join(" · ")}</span>
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {c.contacts.map((k) => (
                      <li key={k.nom} className="text-primary-foreground/65">
                        <span className="block font-medium text-primary-foreground/85">
                          {k.nom}
                          {k.poste ? ` — ${k.poste}` : ""}
                        </span>
                        {k.email ? (
                          <a
                            href={`mailto:${k.email}`}
                            className="flex items-start gap-2 break-all transition-colors hover:text-primary-foreground"
                          >
                            <Mail className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                            {k.email}
                          </a>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
            <p className="mt-6 flex items-center gap-2 text-sm text-primary-foreground/80">
              <Mail className="h-4 w-4 text-accent" />
              <a href={`mailto:${SITE.email}`} className="hover:text-primary-foreground">
                {SITE.email}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Groupe SIAT-Engineering — SARL. Tous droits réservés.</p>
          <p>RCCM : à compléter · Siège social : Garoua, Cameroun</p>
        </div>
      </div>
    </footer>
  );
}
