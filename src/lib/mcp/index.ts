import { defineMcp } from "@lovable.dev/mcp-js";
import getCompanyProfile from "./tools/get-company-profile";
import listOffices from "./tools/list-offices";
import listExpertiseDomains from "./tools/list-expertise-domains";
import getExpertiseDomain from "./tools/get-expertise-domain";

export default defineMcp({
  name: "groupe-siat",
  title: "GROUPE SIAT",
  version: "0.1.0",
  instructions:
    "Outils de consultation du contenu public du site Groupe SIAT-Engineering, bureau d'études et d'ingénierie pluridisciplinaire présent dans sept pays d'Afrique. Utilisez get_company_profile pour la présentation générale, list_offices pour les implantations et contacts publics, list_expertise_domains et get_expertise_domain pour les domaines d'expertise.",
  tools: [getCompanyProfile, listOffices, listExpertiseDomains, getExpertiseDomain],
});
