import { createFileRoute, Link, useSearch } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";

type MerciSearch = { type?: "contact" | "candidature" | "newsletter" };

export const Route = createFileRoute("/merci")({
  component: Merci,
  validateSearch: (search: Record<string, unknown>): MerciSearch => ({
    type:
      search["type"] === "candidature"
        ? "candidature"
        : search["type"] === "newsletter"
          ? "newsletter"
          : "contact",
  }),
  head: () => ({
    meta: [
      { title: "Merci — Message bien reçu | SIAT-Engineering" },
      {
        name: "description",
        content:
          "Votre demande a bien été transmise au Groupe SIAT-Engineering. Nos équipes vous répondent sous 48 heures.",
      },
      { property: "og:title", content: "Merci — Message bien reçu" },
      {
        property: "og:description",
        content: "Votre demande a bien été transmise au Groupe SIAT-Engineering.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/merci" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/merci" }],
  }),
});

const MESSAGES = {
  contact: {
    titre: "Merci, votre message a bien été envoyé",
    texte:
      "Nos équipes ont bien reçu votre demande et vous répondent sous 48 heures ouvrées depuis l'implantation la plus proche.",
  },
  candidature: {
    titre: "Merci, votre candidature a bien été enregistrée",
    texte:
      "Votre dossier est transmis à notre service des ressources humaines. Nous revenons vers vous si votre profil correspond à un besoin en cours.",
  },
  newsletter: {
    titre: "Merci, votre inscription est confirmée",
    texte:
      "Vous recevrez nos actualités projets et appels à candidatures. Vous pouvez vous désinscrire à tout moment via le lien présent dans chaque email.",
  },
} as const;

function Merci() {
  const { type = "contact" } = useSearch({ from: "/merci" });
  const m = MESSAGES[type];

  return (
    <SiteLayout>
      <section className="mx-auto max-w-3xl px-5 py-28 lg:px-8">
        <div className="rule-accent bg-surface p-8 text-center">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent">
            <Check className="h-7 w-7 text-accent-foreground" />
          </span>
          <h1 className="mt-6 font-display text-2xl font-bold text-foreground lg:text-3xl">
            {m.titre}
          </h1>
          <p className="text-block mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            {m.texte}
          </p>
          <p className="mx-auto mt-4 max-w-xl text-xs leading-relaxed text-muted-foreground">
            Les données transmises sont utilisées uniquement pour traiter votre demande et ne sont
            jamais cédées à des tiers. Vous pouvez demander leur accès, leur rectification ou leur
            suppression en écrivant à contact@siat-engineering.com.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Retour à l'accueil <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/savoir-faire"
              className="inline-flex items-center gap-2 rounded-sm border border-accent px-6 py-3.5 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Découvrir nos savoir-faire
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
