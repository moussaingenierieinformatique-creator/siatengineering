import { defineTool } from "@lovable.dev/mcp-js";
import { SITE, VALEURS, CHIFFRES, PARTNERS } from "@/lib/site-data";

export default defineTool({
  name: "get_company_profile",
  title: "Profil de l'entreprise",
  description:
    "Renvoie la présentation publique de Groupe SIAT-Engineering : identité, chiffres clés, engagements et partenaires.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const profile = {
      nom: SITE.name,
      baseline: SITE.baseline,
      email: SITE.email,
      siege: SITE.hq,
      chiffresCles: CHIFFRES,
      engagements: VALEURS,
      partenaires: PARTNERS.map((p) => p.nom),
    };

    return {
      content: [{ type: "text", text: JSON.stringify(profile, null, 2) }],
      structuredContent: profile,
    };
  },
});
