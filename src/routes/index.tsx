import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Landmark, Globe2, Download, Check } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import hero from "@/assets/banniere-siat.jpg.asset.json";
import hero2 from "@/assets/banniere-siat-2.jpg.asset.json";
import { SiteLayout, SectionTitle } from "@/components/site/SiteLayout";
import { RotatingImage } from "@/components/site/RotatingImage";
import { CHIFFRES, COUNTRIES, DOMAINS, PARTNERS, partnerLogo } from "@/lib/site-data";
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
          "Études techniques et supervision de travaux pour États, bailleurs et opérateurs, dans sept pays d'Afrique centrale et de l'Ouest.",
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
  { pays: "Mauritanie", ville: "Nouakchott", image: photo("img_p11_2") },
];

// Chaque vignette est rattachée à une catégorie métier et fait défiler ses propres visuels.
const RESSOURCES_CATEGORIES: { label: string; alt: string; images: string[] }[] = [
  {
    label: "Études & conception",
    alt: "Équipes SIAT-Engineering en études techniques et conception",
    images: ["img_p7_1", "img_p7_2", "img_p7_3", "img_p14_1"].map(photo),
  },
  {
    label: "Topographie & terrain",
    alt: "Ingénieurs SIAT-Engineering en levés topographiques et travaux de terrain",
    images: ["img_p8_8", "img_p8_1", "img_p13_1", "img_p12_5"].map(photo),
  },
  {
    label: "Ouvrages d'art & routes",
    alt: "Supervision d'ouvrages d'art et de chantiers routiers",
    images: ["img_p9_1", "img_p10_2", "img_p10_6", "img_p9_3"].map(photo),
  },
  {
    label: "Hydraulique & bâtiment",
    alt: "Infrastructures hydrauliques et projets de bâtiment",
    images: ["img_p11_2", "img_p11_3", "img_p12_2", "img_p13_6"].map(photo),
  },
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

const HERO_SLIDES = [
  {
    src: hero.url,
    alt: "Équipes d'ingénieurs SIAT-Engineering en réunion d'études et en supervision de chantier",
  },
  {
    src: hero2.url,
    alt: "Prestations du Groupe SIAT-Engineering : bâtiments, routes & VRD, ouvrages d'art et ingénierie durable",
  },
];

function Hero() {
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % HERO_SLIDES.length), 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative isolate bg-navy-deep">
      <div className="relative w-full">
        <img
          src={HERO_SLIDES[0].src}
          alt={HERO_SLIDES[0].alt}
          width={1920}
          height={1088}
          className={`block h-auto w-full object-contain transition-opacity duration-700 ${
            slide === 0 ? "opacity-100" : "opacity-0"
          }`}
        />
        {HERO_SLIDES.slice(1).map((s, i) => (
          <img
            key={s.src}
            src={s.src}
            alt={s.alt}
            loading="lazy"
            className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-700 ${
              slide === i + 1 ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      <div className="relative mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20">
        <div className="border-b border-primary-foreground/15 pb-10 text-center">
          <h1 className="animate-fade-up text-4xl font-bold leading-[1.05] text-primary-foreground sm:text-5xl lg:text-6xl">
            Groupe SIAT-Engineering
          </h1>
        </div>
        <p className="animate-fade-up mt-10 w-full text-center text-lg font-medium uppercase leading-relaxed tracking-wide text-primary-foreground/90 sm:text-xl lg:text-2xl lg:leading-snug">
          Bureau d'études d'ingénierie pluridisciplinaire, accompagne ses clients-partenaires,
          entreprises et institutions publiques ou privées, dans l'identification, la conception, la
          réalisation et le suivi de leurs stratégies et projets
        </p>
        <div className="animate-fade-up mt-9 flex flex-wrap justify-center gap-3">
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

function AnimatedValue({ value }: { value: string }) {
  const match = value.match(/^(\D*)(\d+)(\D*)$/);
  const [display, setDisplay] = useState(match ? `${match[1]}0${match[3]}` : value);

  useEffect(() => {
    if (!match) return;
    const target = Number(match[2]);
    const duration = 1400;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const current = p < 1 ? Math.floor(Math.random() * 0.35 * target + eased * target) : target;
      setDisplay(`${match[1]}${Math.min(current, target)}${match[3]}`);
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return <>{display}</>;
}

function Chiffres() {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-border px-5 lg:grid-cols-4 lg:px-8">
        {CHIFFRES.map((c) => (
          <div key={c.label} className="bg-surface px-4 py-10 text-center">
            <p className="font-display text-4xl font-bold text-primary lg:text-5xl">
              <AnimatedValue value={c.valeur} />
            </p>
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
          <SectionTitle title="Ressources techniques" />
          <p className="text-block mt-6 text-base leading-relaxed text-foreground">
            L'intervention de Groupe SIAT-Engineering s'étend sur tout le cycle d'un projet, des
            études d'identification, de diagnostic ou de faisabilité, jusqu'à la supervision des
            travaux.
          </p>
          <p className="text-block mt-4 text-base leading-relaxed text-foreground">
            Ses équipes d'ingénieurs et de techniciens pluridisciplinaires sont en mesure d'assurer
            un service optimal à chacune des composantes d'un projet.
          </p>
          <Link
            to="/a-propos"
            className="mt-8 inline-flex items-center gap-2 font-display text-sm font-semibold text-accent hover:gap-3 transition-all"
          >
            Découvrir le groupe <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {RESSOURCES_CATEGORIES.map((cat, i) => (
            <figure key={cat.label} className="group relative">
              <RotatingImage
                images={cat.images}
                alt={cat.alt}
                interval={4200 + i * 900}
                delay={i * 700}
                className="aspect-[4/3] w-full rounded-sm shadow-[var(--shadow-card)]"
              />
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/85 to-transparent px-3 pb-2 pt-8 font-display text-[0.7rem] font-semibold uppercase tracking-widest text-primary-foreground">
                {cat.label}
              </figcaption>
            </figure>
          ))}
        </div>

      </div>
    </section>
  );
}

function Domaines() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const domain = DOMAINS[active];
  const images = domain.images.map((n) => photo(n)).filter(Boolean);

  // Défilement automatique de tous les domaines, à tour de rôle.
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((i) => (i + 1) % DOMAINS.length), 4000);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle
          eyebrow="Nos savoir-faire"
          title="12 domaines d'expertise"
          intro="L'expertise de Groupe SIAT-Engineering couvre la création, la conception, la modernisation des infrastructures modernes. Ils se développent sur la base des méthodes de calcul spécifiques et des règlements les plus récents, en tenant compte des techniques d'exécution les plus appropriées."
        />

        <div
          className="mt-12 grid gap-8 lg:grid-cols-[22rem_1fr]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <ul className="max-h-[34rem] space-y-1 overflow-y-auto pr-1">
            {DOMAINS.map((d, i) => (
              <li key={d.slug}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  aria-pressed={i === active}
                  className={`flex w-full items-center gap-3 rounded-sm border px-4 py-3 text-left text-sm transition-all duration-300 ${
                    i === active
                      ? "border-accent bg-card font-semibold text-accent shadow-[var(--shadow-card)]"
                      : "border-transparent text-foreground/75 hover:border-border hover:bg-card"
                  }`}
                >
                  <span className="font-display text-xs text-muted-foreground">
                    {String(d.numero).padStart(2, "0")}
                  </span>
                  <span className="flex-1">{d.titre}</span>
                  <ArrowRight
                    className={`h-4 w-4 transition-all duration-300 ${
                      i === active ? "opacity-100" : "-translate-x-1 opacity-0"
                    }`}
                  />
                </button>
              </li>
            ))}
          </ul>

          <div key={domain.slug} className="animate-fade-in overflow-hidden rounded-sm bg-card shadow-[var(--shadow-card)]">
            <div className="relative">
              <RotatingImage
                images={images}
                alt={`Illustrations du domaine ${domain.titre}`}
                interval={3500}
                className="aspect-[16/9] w-full"
              />
              <span className="absolute left-0 top-0 bg-accent px-3 py-1.5 font-display text-xs font-bold text-accent-foreground">
                {String(domain.numero).padStart(2, "0")}
              </span>
            </div>
            <div className="p-7">
              <h3 className="font-display text-2xl font-semibold text-primary">{domain.titre}</h3>
              <p className="text-block mt-3 text-sm leading-relaxed text-muted-foreground">
                {domain.accroche}
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {domain.etapes.slice(0, 4).map((e) => (
                  <li key={e.titre} className="rounded-sm bg-surface p-4">
                    <p className="font-display text-sm font-semibold text-foreground">{e.titre}</p>
                    <p className="text-block mt-1 text-xs leading-relaxed text-muted-foreground">
                      {e.texte}
                    </p>
                  </li>
                ))}
              </ul>
              <Link
                to="/savoir-faire/$slug"
                params={{ slug: domain.slug }}
                className="mt-7 inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Découvrir ce domaine <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
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
          Sept implantations en Afrique centrale et de l'Ouest au service du continent
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
    <section className="border-y border-border bg-background py-16">
      <h2 className="section-heading mx-auto max-w-7xl px-5 text-center text-3xl lg:px-8 lg:text-4xl">
        Ils nous font confiance
      </h2>
      <div className="mt-10 overflow-hidden">
        <div className="animate-marquee flex w-max items-stretch gap-6">
          {list.map((p, i) => {
            const logo = partnerLogo(p);
            return (
              <span
                key={`${p.nom}-${i}`}
                className="flex min-w-[15rem] flex-col items-center justify-start gap-4 rounded-sm border border-border bg-surface px-6 py-6 text-center"
              >
                {logo && (
                  <img
                    src={logo}
                    alt={`Logo ${p.nom}`}
                    loading="lazy"
                    width={128}
                    height={96}
                    onError={(e) => {
                      const el = e.currentTarget;
                      if (p.domaine && !el.dataset.fallback) {
                        el.dataset.fallback = "1";
                        el.src = `https://www.google.com/s2/favicons?domain=${p.domaine}&sz=256`;
                      }
                    }}
                    className="h-24 w-32 shrink-0 rounded-sm bg-background object-contain p-2"
                  />
                )}
                <span className="max-w-[13rem] font-display text-sm font-semibold leading-snug text-primary">
                  {p.nom}
                </span>
              </span>
            );
          })}
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
            <r.icon className="h-7 w-7 text-primary" />
            <h3 className="section-heading mt-5 text-lg">{r.titre}</h3>
            <p className="text-block mt-3 text-sm leading-relaxed text-muted-foreground">{r.texte}</p>
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
          <h3 className="section-heading text-2xl">Présentation institutionnelle</h3>
          <p className="text-block mt-3 text-sm leading-relaxed text-muted-foreground">
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
          <h3 className="section-heading text-2xl">Newsletter</h3>
          <p className="text-block mt-3 text-sm leading-relaxed text-muted-foreground">
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
