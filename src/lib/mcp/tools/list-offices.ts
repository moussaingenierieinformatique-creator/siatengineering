import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { COUNTRIES } from "@/lib/site-data";

export default defineTool({
  name: "list_offices",
  title: "Lister les implantations",
  description:
    "Liste les implantations publiques de Groupe SIAT-Engineering (pays, ville, statut, téléphones, direction et contacts publics).",
  inputSchema: {
    pays: z
      .string()
      .optional()
      .describe("Filtre optionnel sur le nom du pays, par exemple 'Cameroun'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ pays }) => {
    const needle = pays?.trim().toLowerCase();
    const offices = COUNTRIES.filter(
      (c) => !needle || c.pays.toLowerCase().includes(needle),
    ).map((c) => ({
      pays: c.pays,
      statut: c.statut,
      ville: c.ville,
      telephones: c.telephones,
      directeur: c.directeur,
      emailDirection: c.emailDirection,
      contacts: c.contacts.map((p) => ({
        nom: p.nom,
        poste: p.poste,
        email: p.email,
        telephones: p.telephones,
      })),
    }));

    return {
      content: [{ type: "text", text: JSON.stringify(offices, null, 2) }],
      structuredContent: { offices },
    };
  },
});
