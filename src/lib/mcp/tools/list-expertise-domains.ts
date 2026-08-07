import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { DOMAINS } from "@/lib/site-data";

export default defineTool({
  name: "list_expertise_domains",
  title: "Lister les domaines d'expertise",
  description:
    "Liste les 12 domaines d'expertise de Groupe SIAT-Engineering (numéro, slug, titre, accroche).",
  inputSchema: {
    recherche: z
      .string()
      .optional()
      .describe("Filtre optionnel par mot-clé sur le titre ou l'accroche."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ recherche }) => {
    const needle = recherche?.trim().toLowerCase();
    const domains = DOMAINS.filter(
      (d) =>
        !needle ||
        d.titre.toLowerCase().includes(needle) ||
        d.accroche.toLowerCase().includes(needle),
    ).map((d) => ({
      numero: d.numero,
      slug: d.slug,
      titre: d.titre,
      accroche: d.accroche,
    }));

    return {
      content: [{ type: "text", text: JSON.stringify(domains, null, 2) }],
      structuredContent: { domains },
    };
  },
});
