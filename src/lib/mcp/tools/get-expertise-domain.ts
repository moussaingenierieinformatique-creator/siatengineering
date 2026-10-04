import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { ALL_DOMAIN_PAGES, DOMAINS } from "@/lib/site-data";

export default defineTool({
  name: "get_expertise_domain",
  title: "Détail d'un domaine d'expertise",
  description:
    "Renvoie les prestations officielles d'un domaine d'expertise à partir de son slug ou de son numéro.",
  inputSchema: {
    slug: z
      .string()
      .describe("Slug du domaine, par exemple 'etudes-techniques', ou son numéro (1 à 10)."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    const key = slug.trim().toLowerCase();
    const domain =
      ALL_DOMAIN_PAGES.find((d) => d.slug === key) ??
      DOMAINS.find((d) => String(d.numero) === key);

    if (!domain) {
      throw new ToolError(
        `Domaine introuvable: "${slug}". Utilisez list_expertise_domains pour voir les slugs disponibles.`,
      );
    }

    const payload = {
      numero: domain.numero,
      slug: domain.slug,
      titre: domain.titre,
      accroche: domain.accroche,
      sections: domain.sections,
      sousDomaines: domain.sousDomaines,
    };

    return {
      content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
      structuredContent: payload,
    };
  },
});
