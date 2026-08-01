import { photo } from "./photos";
import ntockPhoto from "@/assets/ntock-patrick.jpg.asset.json";
import aboubakarPhoto from "@/assets/aboubakar-souaibou.jpg.asset.json";
import dgNiger from "@/assets/dg-niger.jpg.asset.json";
import dgTchad from "@/assets/dg-tchad.jpg.asset.json";
import dgMali from "@/assets/dg-mali.jpg.asset.json";
import dgRca from "@/assets/dg-rca.jpg.asset.json";
import dgMauritanie from "@/assets/dg-mauritanie-2.jpg.asset.json";
import dgNigeria from "@/assets/dg-nigeria.jpg.asset.json";


export const SITE = {
  name: "Groupe SIAT-Engineering",
  baseline: "L'ingénierie au service des infrastructures durables en Afrique.",
  email: "contact@siat-engineering.com",
  hq: "Garoua, Cameroun",
};

export type Contact = {
  nom: string;
  poste?: string;
  email?: string;
  telephones: string[];
  photo?: string;
};

export type Country = {
  pays: string;
  statut: string;
  ville: string;
  telephones: string[];
  directeur?: string;
  emailDirection?: string;
  mapQuery: string;
  contacts: Contact[];
};

export const COUNTRIES: Country[] = [
  {
    pays: "Cameroun",
    statut: "Siège social",
    ville: "Garoua",
    mapQuery: "Garoua, Cameroun",
    telephones: ["(00237) 691 83 50 89", "(00237) 675 49 39 89", "(00237) 695 11 43 90"],
    directeur: "Ntock Patrick",
    emailDirection: "patrick.ntock@siat-engineering.com",
    contacts: [
      {
        nom: "Ntock Patrick",
        poste: "Directeur",
        email: "patrick.ntock@siat-engineering.com",
        telephones: ["(00237) 691 83 50 89", "(00237) 675 49 39 89"],
        photo: ntockPhoto.url,
      },
      {
        nom: "Aboubakar Souaibou",
        poste: "D.A.F.",
        telephones: ["(+237) 695 11 43 90", "(+237) 675 17 06 32"],
        photo: aboubakarPhoto.url,
      },
    ],
  },
  {
    pays: "République Centrafricaine",
    statut: "Représentation",
    ville: "Bangui",
    mapQuery: "Bangui, République Centrafricaine",
    telephones: ["(00236) 74 57 00 17", "(00236) 70 02 22 66"],
    directeur: "Oumar Touré",
    emailDirection: "oumar.toure@siat-engineering.com",
    contacts: [
      {
        nom: "Oumar Touré",
        poste: "Représentant pays",
        email: "oumar.toure@siat-engineering.com",
        telephones: ["(00236) 74 57 00 17", "(00236) 70 02 22 66"],
        photo: dgRca.url,
      },
    ],
  },
  {
    pays: "Tchad",
    statut: "Représentation",
    ville: "N'Djaména",
    mapQuery: "N'Djamena, Tchad",
    telephones: ["(00235) 66 38 81 59", "(00235) 90 27 21 20"],
    directeur: "Souleyman Haroun",
    emailDirection: "souleyman.haroun@siat-engineering.com",
    contacts: [
      {
        nom: "Souleyman Haroun",
        poste: "Représentant pays",
        email: "souleyman.haroun@siat-engineering.com",
        telephones: ["(00235) 66 38 81 59", "(00235) 90 27 21 20"],
        photo: dgTchad.url,
      },
    ],
  },
  {
    pays: "Niger",
    statut: "Représentation",
    ville: "Niamey",
    mapQuery: "Niamey, Niger",
    telephones: ["(00227) 96 14 77 14", "(00227) 93 48 21 20"],
    directeur: "Mahaman Ismailou Abdou",
    emailDirection: "mahaman.abdou@siat-engineering.com",
    contacts: [
      {
        nom: "Mahaman Ismailou Abdou",
        poste: "Représentant pays",
        email: "mahaman.abdou@siat-engineering.com",
        telephones: ["(00227) 96 14 77 14", "(00227) 93 48 21 20"],
        photo: dgNiger.url,
      },
    ],
  },
  {
    pays: "Mali",
    statut: "Représentation",
    ville: "Bamako",
    mapQuery: "Bamako, Mali",
    telephones: ["(00223) 70 44 79 80"],
    directeur: "Yaya Issa Faradjallah",
    emailDirection: "yaya.faradjallah@siat-engineering.com",
    contacts: [
      {
        nom: "Yaya Issa Faradjallah",
        poste: "Représentant pays",
        email: "yaya.faradjallah@siat-engineering.com",
        telephones: ["(00223) 70 44 79 80"],
        photo: dgMali.url,
      },
    ],
  },
  {
    pays: "Nigeria",
    statut: "Représentation",
    ville: "Abuja",
    mapQuery: "Abuja, Nigeria",
    telephones: ["(00234) 080 878 380 06", "(00234) 706 716 2161"],
    directeur: "Abdoul Bagui Bindoh",
    emailDirection: "abdoul.bindoh@siat-engineering.com",
    contacts: [
      {
        nom: "Abdoul Bagui Bindoh",
        poste: "Représentant pays",
        email: "abdoul.bindoh@siat-engineering.com",
        telephones: ["(00234) 080 878 380 06", "(00234) 706 716 2161"],
        photo: dgNigeria.url,
      },
    ],

  },
  {
    pays: "Mauritanie",
    statut: "Représentation",
    ville: "Nouakchott",
    mapQuery: "Nouakchott, Mauritanie",
    telephones: ["(00222) 45 25 10 20"],
    directeur: "Mohamed Ould Ahmed",
    emailDirection: "contact@siat-engineering.com",
    contacts: [
      {
        nom: "Mohamed Ould Ahmed",
        poste: "Directeur Général",
        email: "contact@siat-engineering.com",
        telephones: ["(00222) 45 25 10 20"],
        photo: dgMauritanie.url,
      },
    ],
  },
];


export type Domain = {
  slug: string;
  numero: number;
  titre: string;
  accroche: string;
  etapes: { titre: string; texte: string }[];
  images: string[];
};

export const DOMAINS: Domain[] = [
  {
    slug: "etudes-techniques",
    numero: 1,
    titre: "Études Techniques",
    accroche:
      "De l'étude préalable à la réception des travaux, une maîtrise complète du cycle de projet.",
    etapes: [
      {
        titre: "Étude préalable et diagnostic",
        texte: "Collecte des données, rédaction du cahier des charges.",
      },
      {
        titre: "Consultation et passation des marchés",
        texte:
          "Lancement des appels d'offres, finalisation des contrats, validation des documents, planification opérationnelle, installation de chantier.",
      },
      {
        titre: "Direction et suivi des travaux",
        texte: "Pilotage et coordination, contrôle qualité et financier, gestion des délais.",
      },
      {
        titre: "Réception et clôture",
        texte:
          "Opérations préalables à la réception (OPR), levée des réserves et réception, clôture administrative.",
      },
    ],
    images: ["img_p7_1", "img_p7_2", "img_p7_3", "img_p7_4"],
  },
  {
    slug: "assistance-technique",
    numero: 2,
    titre: "Assistance Technique",
    accroche: "Un appui technique à chaque étape, du cadrage du besoin à la réception des travaux.",
    etapes: [
      {
        titre: "Analyse et cadrage du besoin",
        texte: "Diagnostic, définition des objectifs, Termes de Référence (TDR).",
      },
      {
        titre: "Études préliminaires et de faisabilité",
        texte: "Études techniques et environnementales, évaluation budgétaire.",
      },
      {
        titre: "Planification opérationnelle",
        texte: "Découpage des tâches, chronogramme, plan de gestion des risques.",
      },
      {
        titre: "Planification des procédures et passation des marchés",
        texte:
          "Dossier de Consultation des Entreprises (DCE), processus d'appel d'offres, assistance au choix des entreprises.",
      },
      {
        titre: "Préparation de l'exécution",
        texte:
          "Mise en place des outils de suivi, plan de communication, audit technique et organisationnel, manuel de gestion des ouvrages et équipements.",
      },
      {
        titre: "Analyse et capital humain",
        texte:
          "Sélection des experts, attribution des rôles, pilotage, supervision, contrôle des travaux et réception des travaux.",
      },
    ],
    images: ["img_p8_1", "img_p8_2", "img_p8_3", "img_p8_4"],
  },
  {
    slug: "infrastructures-de-transports",
    numero: 3,
    titre: "Infrastructures de Transports",
    accroche: "Routes, ouvrages d'art et pistes rurales : de la planification à la mise en service.",
    etapes: [
      {
        titre: "Planification et études d'opportunité",
        texte:
          "Identification des besoins de mobilité et de développement socio-économique, études de faisabilité géotechniques, environnementales et économiques.",
      },
      {
        titre: "Conception et études détaillées",
        texte:
          "Tracés, profils, dimensionnement des chaussées et des ouvrages, pièces écrites et plans d'exécution.",
      },
      {
        titre: "Passation des marchés et travaux",
        texte: "Assistance aux maîtres d'ouvrage au choix des entreprises.",
      },
      {
        titre: "Réception et mise en service",
        texte: "Inspection finale et réception des ouvrages.",
      },
    ],
    images: ["img_p8_5", "img_p8_6", "img_p8_7", "img_p8_8"],
  },
  {
    slug: "ouvrages-de-franchissement",
    numero: 4,
    titre: "Infrastructures des Ouvrages de Franchissement",
    accroche: "Ponts et ouvrages d'art : une ingénierie de précision, du sol à la structure.",
    etapes: [
      {
        titre: "Études préliminaires et reconnaissance du site",
        texte:
          "Levé et délimitation du site, profils en long et en travers, campagnes de reconnaissance du sol.",
      },
      {
        titre: "Études hydrologiques et hydrauliques",
        texte: "Délimitation du bassin versant, calcul des débits de crue.",
      },
      {
        titre: "Choix et conception de l'ouvrage",
        texte:
          "Sélection de la solution technique, études de variantes, prédimensionnement, modélisation numérique.",
      },
      {
        titre: "Calculs justificatifs",
        texte:
          "Vérification de la résistance des matériaux et de la stabilité globale, calcul du ferraillage.",
      },
      {
        titre: "Dossier de consultation",
        texte: "Établissement des plans détaillés et rédaction des pièces écrites.",
      },
    ],
    images: ["img_p9_1", "img_p9_2", "img_p9_3", "img_p9_4"],
  },
  {
    slug: "infrastructures-des-batiments",
    numero: 5,
    titre: "Infrastructures des Bâtiments",
    accroche:
      "Édifices publics, logements et équipements : une conception jusqu'au moindre détail technique.",
    etapes: [
      {
        titre: "Étude de faisabilité et programmation",
        texte: "Analyse des besoins, étude du site, étude géotechnique.",
      },
      {
        titre: "Esquisse et avant-projets",
        texte: "Avant-Projet Sommaire (APS), Avant-Projet Définitif (APD).",
      },
      {
        titre: "Études techniques et de structure",
        texte: "Études de structure, études des fluides (plomberie, climatisation/froid).",
      },
      {
        titre: "Dossier de Consultation des Entreprises (DCE)",
        texte:
          "Cahier des Clauses Techniques Particulières (CCTP), Devis Quantitatif et Estimatif (DQE).",
      },
      {
        titre: "Plans d'exécution et planification opérationnelle",
        texte: "Plans d'exécution, planning prévisionnel.",
      },
    ],
    images: ["img_p10_1", "img_p10_2", "img_p10_3", "img_p10_4"],
  },
  {
    slug: "hydraulique-rurale",
    numero: 6,
    titre: "Hydraulique Rurale",
    accroche: "Mobiliser et gérer l'eau au service du développement rural.",
    etapes: [
      {
        titre: "Identification et diagnostic",
        texte:
          "Collecte des données sur le terrain, analyse de faisabilité sociale, économique et environnementale.",
      },
      {
        titre: "Conception et dimensionnement",
        texte:
          "Choix des ouvrages de mobilisation, dimensionnement des réseaux et des points d'eau.",
      },
      {
        titre: "Gestion et renforcement des capacités",
        texte:
          "Formation des comités d'usagers locaux, répartition équitable de l'eau, sauvegarde du foncier.",
      },
      {
        titre: "Exploitation et maintenance",
        texte: "Système de suivi, maintenance préventive, réparation des pompes.",
      },
    ],
    images: ["img_p10_5", "img_p10_6", "img_p10_7", "img_p10_8"],
  },
  {
    slug: "hydraulique-urbaine-assainissement",
    numero: 7,
    titre: "Hydraulique Urbaine et Assainissement",
    accroche: "L'eau potable et l'assainissement au cœur du développement urbain.",
    etapes: [
      {
        titre: "Étude et diagnostic",
        texte:
          "Recueil des données démographiques, topographiques, hydrologiques et géotechniques, évaluation des infrastructures d'eau et d'assainissement.",
      },
      {
        titre: "Objectifs de zonage et besoins en eau",
        texte: "Calcul des volumes d'eau potable, zonage d'assainissement.",
      },
      {
        titre: "Études techniques de faisabilité",
        texte:
          "Comparaison technico-économique du schéma directeur, dimensionnement des canalisations, stations de pompage et de traitement.",
      },
      {
        titre: "Planification financière et institutionnelle",
        texte:
          "Calcul du coût d'investissement, recherche de financements, stratégie de gestion.",
      },
    ],
    images: ["img_p11_1", "img_p11_2", "img_p11_3", "img_p11_4"],
  },
  {
    slug: "hydraulique-agricole",
    numero: 8,
    titre: "Hydraulique Agricole",
    accroche: "Irrigation et drainage : sécuriser la production agricole par l'ingénierie.",
    etapes: [
      {
        titre: "Étude, collecte des données et diagnostic",
        texte: "Levés topographiques, pédologie, climatologie.",
      },
      {
        titre: "Évaluation des ressources en eau et des besoins",
        texte: "Bilan hydrique, analyse quantitative et qualitative des eaux.",
      },
      {
        titre: "Conception et dimensionnement des ouvrages",
        texte:
          "Choix du système d'irrigation/drainage, dimensionnement hydraulique, stations de pompage et de filtration.",
      },
      {
        titre: "Étude économique, financière et environnementale",
        texte:
          "Valeur Actuelle Nette (VAN), Étude d'Impact Environnemental et Social (EIES).",
      },
      {
        titre: "Planification opérationnelle et d'exécution",
        texte:
          "Plan d'action, chronogramme, Dossier d'Appel d'Offres (DAO), suivi et contrôle des travaux.",
      },
    ],
    images: ["img_p12_1", "img_p12_2", "img_p12_3", "img_p12_4", "img_p12_5", "img_p12_6"],
  },
  {
    slug: "hydraulique-fluviale",
    numero: 9,
    titre: "Hydraulique Fluviale",
    accroche: "Barrages, berges et voies navigables : maîtriser les cours d'eau en toute sécurité.",
    etapes: [
      {
        titre: "Études préliminaires et collecte des données",
        texte: "Levés topographiques et bathymétriques, études hydrologiques et géotechniques.",
      },
      {
        titre: "Étude et modélisation hydraulique",
        texte: "Diagnostic technique, analyse structurelle, stabilité des berges.",
      },
      {
        titre: "Évaluation environnementale et sociale",
        texte: "Étude d'Impact (EIES), biodiversité aquatique, acceptabilité sociale.",
      },
      {
        titre: "Analyse des capacités logistiques et économiques",
        texte: "Compétitivité du transport fluvial, besoins en dragage.",
      },
    ],
    images: ["img_p13_1", "img_p13_2", "img_p13_3", "img_p13_4"],
  },
  {
    slug: "electricite",
    numero: 10,
    titre: "Électricité",
    accroche: "Des réseaux fiables aux énergies renouvelables, une expertise électrique complète.",
    etapes: [
      {
        titre: "Étude de faisabilité, d'opportunité et analyse des besoins",
        texte: "Estimation de la puissance nécessaire, bilan de puissance, contraintes locales.",
      },
      {
        titre: "Étude de précision",
        texte:
          "Tracés exacts, schémas unifilaires, notes de calcul justificatives, schémas électriques détaillés, simulation et tests virtuels, contrôle de conformité.",
      },
      {
        titre: "Étude de protection et de coordination",
        texte:
          "Interconnexion réalisable, transit et flux de puissance, stabilité dynamique du réseau.",
      },
    ],
    images: ["img_p13_5", "img_p13_6", "img_p13_7", "img_p13_8"],
  },
  {
    slug: "environnement",
    numero: 11,
    titre: "Environnement",
    accroche: "Chaque projet évalué, chaque impact anticipé, chaque territoire préservé.",
    etapes: [
      {
        titre: "Étude et analyse d'impact environnemental",
        texte:
          "Collecte de données sur le milieu récepteur, analyse des variantes, identification et évaluation des impacts.",
      },
      {
        titre: "Mesures d'atténuation et de compensation",
        texte: "Plan de Gestion Environnementale et Sociale (PGES).",
      },
      {
        titre: "Consultation publique et validation",
        texte:
          "Surveillance et suivi environnemental, mesures et plans de protection environnementale, développement durable.",
      },
    ],
    images: ["img_p14_1", "img_p14_2", "img_p14_3"],
  },
  {
    slug: "etudes-economiques-institutionnelles",
    numero: 12,
    titre: "Études Économiques et Institutionnelles",
    accroche:
      "Analyser, structurer et sécuriser la dimension économique et institutionnelle des projets.",
    etapes: [
      {
        titre: "Études macro-économiques",
        texte:
          "Études sectorielles (industrie, pêche, habitat, agriculture), bilans-diagnostics par branche d'activité.",
      },
      {
        titre: "Études de projet",
        texte:
          "Identification et localisation, études de marché, de pré-faisabilité ou de faisabilité, assistance au montage institutionnel et financier.",
      },
      {
        titre: "Diagnostic d'entreprise et assistance à la gestion",
        texte:
          "Analyse de la fonction administrative et financière, analyse de la fonction commerciale, analyse de la fonction personnelle et du potentiel technique.",
      },
    ],
    images: ["img_p14_4"],
  },
];

export function domainCover(d: Domain): string {
  return photo(d.images[0]);
}

export function getDomain(slug: string): Domain | undefined {
  return DOMAINS.find((d) => d.slug === slug);
}

export type Partner = { nom: string; domaine?: string; logo?: string };

import isdbLogo from "@/assets/partners-banque_islamique.jpg.asset.json";
import crsLogo from "@/assets/partners-crs.jpg.asset.json";
import eauViveLogo from "@/assets/partners-eau_vive.jpg.asset.json";
import pamLogo from "@/assets/partners-pam.jpg.asset.json";
import unicefLogo from "@/assets/partners-unicef1.jpg.asset.json";
import undpLogo from "@/assets/partners-unpd.jpg.asset.json";

export const PARTNERS: Partner[] = [
  { nom: "Banque Africaine de Développement (BAD)", domaine: "afdb.org" },
  { nom: "Banque Mondiale", domaine: "worldbank.org" },
  { nom: "Agence Française de Développement (AFD)", domaine: "afd.fr" },
  { nom: "PNUD", domaine: "undp.org", logo: undpLogo.url },
  { nom: "UNICEF", domaine: "unicef.org", logo: unicefLogo.url },
  { nom: "PAM", domaine: "wfp.org", logo: pamLogo.url },
  { nom: "Catholic Relief Services (CRS)", domaine: "crs.org", logo: crsLogo.url },
  { nom: "Banque Islamique de Développement (BID)", domaine: "isdb.org", logo: isdbLogo.url },
  { nom: "Union Européenne", domaine: "european-union.europa.eu" },
  { nom: "Eau Vive International", domaine: "eau-vive.org", logo: eauViveLogo.url },
  { nom: "Commission du Bassin du Lac Tchad (CBLT)", domaine: "cblt.org" },
  { nom: "CEMAC", domaine: "cemac.int" },
];

export const partnerLogo = (p: Partner) =>
  p.logo ?? (p.domaine ? `https://www.google.com/s2/favicons?domain=${p.domaine}&sz=128` : undefined);


export const VALEURS = [
  "Déployer une démarche professionnelle axée sur l'excellence, fondée sur la transparence et la confiance.",
  "Demeurer, de manière constante, au diapason des techniques et des méthodes afin d'offrir à ses clients des solutions globales compétitives et performantes.",
  "Tisser une relation partenariale avec ses clients pour analyser et relever, ensemble, les enjeux techniques, économiques et financiers de leurs projets.",
  "Entretenir une relation ouverte et loyale avec ses partenaires, fournisseurs et sous-traitants dans un esprit de coopération mutuelle, au seul bénéfice des projets.",
];

export const CHIFFRES = [
  { valeur: "7", label: "Pays d'implantation" },
  { valeur: "12", label: "Domaines d'expertise" },
  { valeur: "48%", label: "Chiffre d'affaires à l'export" },
  { valeur: "ISO", label: "Certification en cours" },
];
