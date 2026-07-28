import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Landmark, Globe2, Download, Check } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import hero from "@/assets/banniere-siat.jpg.asset.json";
import { SiteLayout, SectionTitle } from "@/components/site/SiteLayout";
import { CHIFFRES, COUNTRIES, DOMAINS, PARTNERS, domainCover } from "@/lib/site-data";
import { photo } from "@/lib/photos";

export const Route = createFileRoute("/")({
  component: Accueil,
  head: () => ({
    meta: [
      { title: "Groupe SIAT-Engineering — Ingénierie et supervision de travaux en Afrique" },
      {
        name: "description",
        content:
          "Bureau d'études techniques et de supervision de travaux présent dans 6 pays d'Afrique. 12 domaines d'expertise : transport, hydraulique, bâtiment, environnement, électricité.",
      },
      { property: "og:title", content: "Groupe SIAT-Engineering — L'ingénierie des infrastructures durables" },
      {
        property: "og:description",
        content:
          "Études techniques et supervision de travaux pour États, bailleurs et opérateurs, dans six pays d'Afrique centrale et de l'Ouest.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Groupe SIAT-Engineering",
          description:
            "Bureau d'études techniques et de supervision de travaux en Afrique centrale et de l'Ouest.",
          address: { "@type": "PostalAddress", addressLocality: "Garoua", addressCountry: "CM" },
          email: "contact@siat-engineering.com",
        }),
      },
    ],
  }),
});

const REGIONAL_SLIDES = [
  { pays: "Cameroun", ville: "Garoua — Siège social", image: photo("img_p8_6") },
  { pays: "République Centrafricaine", ville: "Bangui", image: photo("img_p9_2") },
  { pays: "Tchad", ville: "N'Djaména", image: photo("img_p10_6") },
  { pays: "Mali", ville: "Bamako", image: photo("img_p12_2") },
  { pays: "Niger", ville: "Niamey", image: photo("img_p13_6") },
  { pays: "Nigeria", ville: "Abuja", image: photo("img_p10_2") },
];

function Accueil() {
  return (
    <SiteLayout>
      <Hero />
      <Chiffres />
      <Groupe />
      <Domaines />
      <Presence />
      <Partenaires />
      <Reassurance />
      <Ressources />
      <CtaFinal />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-deep">
      <img
        src={hero.url}
        alt="Équipes d'ingénieurs SIAT-Engineering en réunion d'études et en supervision de chantier"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0" style={{ backgroundImage: "var(--gradient-hero)" }} />
      <div className="relative mx-auto max-w-7xl px-5 py-28 lg:px-8 lg:py-40">
        <p className="eyebrow animate-fade-up">Bureau d'études & supervision de travaux</p>
        <h1 className="animate-fade-up mt-5 max-w-3xl text-4xl font-bold leading-[1.05] text-primary-foreground sm:text-5xl lg:text-6xl">
          Groupe SIAT-Engineering
        </h1>
        <p className="animate-fade-up mt-5 max-w-2xl text-lg text-primary-foreground/85 lg:text-xl">
          L'ingénierie au service des infrastructures durables en Afrique.
        </p>
        <p className="animate-fade-up mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/70">
          Bureau d'études techniques et de supervision de travaux, présent dans six pays d'Afrique
          centrale et de l'Ouest. Nous accompagnons États, bailleurs et opérateurs sur les projets
          qui structurent le continent.
        </p>
        <div className="animate-fade-up mt-9 flex flex-wrap gap-3">
          <Link
            to="/savoir-faire"
            className="inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            Nos domaines d'expertise <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-sm border border-primary-foreground/40 px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary"
          >
            Nous consulter
          </Link>
        </div>
      </div>
    </section>
  );
}

function Chiffres() {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-border px-5 lg:grid-cols-4 lg:px-8">
        {CHIFFRES.map((c) => (
          <div key={c.label} className="bg-surface px-4 py-10 text-center">
            <p className="font-display text-4xl font-bold text-primary lg:text-5xl">{c.valeur}</p>
            <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{c.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Groupe() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionTitle eyebrow="Le Groupe" title="Une ingénierie pluridisciplinaire, ancrée en Afrique" />
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Présent dans six pays d'Afrique, le Groupe SIAT-Engineering conduit depuis plusieurs années les études
            techniques et la supervision de projets d'infrastructures dans plus de douze
            disciplines : transport, hydraulique, bâtiment, environnement, électricité, études
            économiques et institutionnelles.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Nos équipes pluridisciplinaires interviennent pour le compte d'États, d'agences
            d'exécution, de bailleurs internationaux et d'opérateurs privés, en assurant un niveau
            technique conforme aux standards internationaux.
          </p>
          <Link
            to="/a-propos"
            className="mt-8 inline-flex items-center gap-2 font-display text-sm font-semibold text-accent hover:gap-3 transition-all"
          >
            Découvrir le groupe <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src={photo("img_p7_2")}
            alt="Équipe SIAT-Engineering en réunion d'études techniques"
            loading="lazy"
            className="h-56 w-full rounded-sm object-cover shadow-[var(--shadow-card)]"
          />
          <img
            src={photo("img_p8_8")}
            alt="Ingénieurs SIAT-Engineering réalisant des levés topographiques"
            loading="lazy"
            className="mt-8 h-56 w-full rounded-sm object-cover shadow-[var(--shadow-card)]"
          />
          <img
            src={photo("img_p9_1")}
            alt="Supervision d'un ouvrage de franchissement"
            loading="lazy"
            className="h-56 w-full rounded-sm object-cover shadow-[var(--shadow-card)]"
          />
          <img
            src={photo("img_p11_2")}
            alt="Infrastructure d'eau potable en milieu urbain"
            loading="lazy"
            className="mt-8 h-56 w-full rounded-sm object-cover shadow-[var(--shadow-card)]"
          />
        </div>
      </div>
    </section>
  );
}

function Domaines() {
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle
          eyebrow="Nos savoir-faire"
          title="12 domaines d'expertise"
          intro="De l'étude préalable à la réception des ouvrages, nos équipes couvrent l'intégralité du cycle de projet."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DOMAINS.map((d) => (
            <Link
              key={d.slug}
              to="/savoir-faire/$slug"
              params={{ slug: d.slug }}
              className="card-lift group flex flex-col overflow-hidden rounded-sm bg-card"
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
                <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-accent">
                  {d.titre}
                </h3>
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
      </div>
    </section>
  );
}

function Presence() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % REGIONAL_SLIDES.length), 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-[26rem] overflow-hidden bg-navy-deep">
      {REGIONAL_SLIDES.map((s, i) => (
        <img
          key={s.pays}
          src={s.image}
          alt={`Implantation SIAT-Engineering — ${s.pays}`}
          loading="lazy"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-40" : "opacity-0"
          }`}
        />
      ))}
      <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-5 lg:px-8">
        <p className="eyebrow">Présence régionale</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-bold text-primary-foreground lg:text-4xl">
          Six implantations en Afrique centrale et de l'Ouest au service du continent
        </h2>
        <div className="mt-8 flex flex-wrap gap-2">
          {REGIONAL_SLIDES.map((s, i) => (
            <button
              key={s.pays}
              type="button"
              onClick={() => setIndex(i)}
              className={`rounded-sm border px-4 py-2 text-sm transition-colors ${
                i === index
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-primary-foreground/30 text-primary-foreground/80 hover:border-primary-foreground"
              }`}
            >
              {s.pays}
            </button>
          ))}
        </div>
        <p className="mt-5 text-sm text-primary-foreground/70">
          {REGIONAL_SLIDES[index].ville}
        </p>
      </div>
    </section>
  );
}

function Partenaires() {
  const list = [...PARTNERS, ...PARTNERS];
  return (
    <section className="border-y border-border bg-background py-14">
      <p className="mx-auto max-w-7xl px-5 text-center text-xs uppercase tracking-[0.22em] text-muted-foreground lg:px-8">
        Ils nous font confiance
      </p>
      <div className="mt-8 overflow-hidden">
        <div className="animate-marquee flex w-max gap-4">
          {list.map((p, i) => (
            <span
              key={`${p}-${i}`}
              className="whitespace-nowrap rounded-sm border border-border bg-surface px-6 py-3.5 font-display text-sm font-medium text-primary/80"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

const REASSURANCE = [
  {
    icon: ShieldCheck,
    titre: "Qualité & conformité",
    texte:
      "Certification ISO en cours avec Bureau Veritas. Procédures internes calées sur les standards internationaux.",
  },
  {
    icon: Landmark,
    titre: "Rigueur institutionnelle",
    texte:
      "Un interlocuteur unique pour les États, agences d'exécution et bailleurs internationaux.",
  },
  {
    icon: Globe2,
    titre: "Ancrage régional",
    texte:
      "48% du chiffre d'affaires réalisé à l'export, une preuve concrète de notre rayonnement.",
  },
];

function Reassurance() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-3">
        {REASSURANCE.map((r) => (
          <div key={r.titre} className="rule-accent bg-surface p-8">
            <r.icon className="h-7 w-7 text-accent" />
            <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{r.titre}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.texte}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Ressources() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function submit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setDone(true);
    setEmail("");
  }

  return (
    <section className="bg-surface py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2 lg:px-8">
        <div className="rule-accent">
          <h3 className="font-display text-2xl font-bold text-foreground">
            Présentation institutionnelle
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Téléchargez le document de présentation du Groupe SIAT-Engineering : références,
            organisation et domaines d'intervention.
          </p>
          <a
            href="#"
            className="mt-6 inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Download className="h-4 w-4" /> Télécharger notre présentation
          </a>
        </div>
        <div className="rule-accent">
          <h3 className="font-display text-2xl font-bold text-foreground">Newsletter</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Recevez nos actualités projets et appels à candidatures.
          </p>
          <form onSubmit={submit} className="mt-6 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="votre.email@exemple.com"
              className="flex-1 rounded-sm border border-input bg-background px-4 py-3.5 text-sm outline-none focus:border-accent"
            />
            <button
              type="submit"
              className="rounded-sm bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              S'inscrire
            </button>
          </form>
          {done && (
            <p className="mt-3 inline-flex items-center gap-2 text-sm text-primary">
              <Check className="h-4 w-4 text-accent" /> Merci, votre inscription est enregistrée.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

function CtaFinal() {
  return (
    <section className="surface-navy">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 py-16 lg:flex-row lg:items-center lg:px-8">
        <div>
          <h2 className="max-w-2xl text-2xl font-bold text-primary-foreground lg:text-3xl">
            Vous conduisez un projet d'infrastructure ? Parlons-en.
          </h2>
          <p className="mt-3 text-sm text-primary-foreground/70">
            Nos équipes vous répondent sous 48 heures — {COUNTRIES.length} implantations à votre
            écoute.
          </p>
        </div>
        <Link
          to="/contact"
          className="inline-flex shrink-0 items-center gap-2 rounded-sm bg-accent px-7 py-4 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
        >
          Contacter le groupe <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
