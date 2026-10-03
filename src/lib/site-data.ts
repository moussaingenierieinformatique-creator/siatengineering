import { photo } from "./photos";
import ntockPhoto from "@/assets/ntock-patrick.jpg.asset.json";
import aboubakarPhoto from "@/assets/aboubakar-souaibou.jpg.asset.json";
import dgNiger from "@/assets/dg-niger.jpg.asset.json";
import dgTchad from "@/assets/dg-tchad.jpg.asset.json";
import dgMali from "@/assets/dg-mali.jpg.asset.json";
import dgRca from "@/assets/dg-rca.jpg.asset.json";
import dgMauritanie from "@/assets/dg-mauritanie-3.png.asset.json";
import dgNigeria from "@/assets/dg-nigeria-2.png.asset.json";


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
  adresses?: string[];
  contacts: Contact[];
};

export const COUNTRIES: Country[] = [
  {
    pays: "Cameroun",
    statut: "Siège social",
    ville: "Garoua",
    mapQuery: "Garoua, Cameroun",
    adresses: ["Garoua, Cameroun (siège social)", "BP 1078 Douala - Akwa"],
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
        email: "aboubakar.souaibou@siat-engineering.com",
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
    emailDirection: "mohamed.ouldahmed@siat-engineering.com",
    contacts: [
      {
        nom: "Mohamed Ould Ahmed",
        poste: "Directeur Général",
        email: "mohamed.ouldahmed@siat-engineering.com",
        telephones: ["(00222) 45 25 10 20"],
        photo: dgMauritanie.url,
      },
    ],
  },
];


export type DomainSection = {
  titre: string;
  prestations: string[];
};

export type DomainLink = {
  slug: string;
  titre: string;
};

export type Domain = {
  slug: string;
  numero: number;
  titre: string;
  accroche: string;
  sections: DomainSection[];
  images: string[];
  sousDomaines?: DomainLink[];
};

const HYDRAULIQUE_LINKS: DomainLink[] = [
  { slug: "hydraulique-urbaine-aep-assainissement", titre: "Hydraulique urbaine AEP et assainissement" },
  { slug: "hydraulique-rurale-villageoise", titre: "Hydraulique rurale et villageoise" },
  { slug: "hydraulique-agricole-irrigation", titre: "Hydraulique agricole et irrigation" },
  { slug: "hydraulique-fluviale", titre: "Hydraulique fluviale" },
];

export const DOMAINS: Domain[] = [
  {
    slug: "etudes-techniques",
    numero: 1,
    titre: "Études techniques",
    accroche: "Des études préliminaires au dossier de consultation des entreprises.",
    sections: [{
      titre: "Études techniques",
      prestations: [
        "Études préliminaires de projet",
        "Études d'Avant-Projet-Détaillé",
        "Études d'exécutions",
        "Dossier de consultation des entreprises",
      ],
    }],
    images: ["img_p7_1", "img_p7_2", "img_p7_3", "img_p7_4"],
  },
  {
    slug: "assistance-technique",
    numero: 2,
    titre: "Assistance technique",
    accroche: "Maîtrise d'œuvre, supervision, audit et réception des travaux.",
    sections: [{
      titre: "Assistance technique",
      prestations: [
        "Maîtrise d'œuvre d'exécution",
        "Assistance au choix des entreprises",
        "Pilotage, supervision et contrôle des travaux",
        "Audit technique et organisationnelle",
        "Réception des travaux",
        "Élaboration du manuel de gestion des ouvrages et équipements",
      ],
    }],
    images: ["img_p8_1", "img_p8_2", "img_p8_3", "img_p8_4"],
  },
  {
    slug: "infrastructures-de-transport",
    numero: 3,
    titre: "Infrastructures de transport",
    accroche: "Étude, conception et supervision des routes et ouvrages d'art.",
    sections: [{
      titre: "Transports",
      prestations: [
        "Étude et conception des routes et ouvrages d'arts",
        "Détermination des caractéristiques topographiques et géotechniques",
        "Études hydrologiques et hydrauliques",
        "Identification et optimisation des tracés",
        "Études topographiques et aménagements routiers",
        "Élargissement des chaussées, étude de renforcement des structures et chaussées",
        "Aménagement des carrefours",
        "Étude du trafic routier",
        "Élaboration de dossier de consultation des entreprises",
        "Supervision et contrôle des travaux",
      ],
    }],
    images: ["img_p8_6", "img_p8_7", "img_p8_8", "img_p9_1"],
  },
  {
    slug: "batiments-travaux-publics",
    numero: 4,
    titre: "Bâtiments et Travaux Publics",
    accroche: "Études de sites, conception des structures et contrôle de l'exécution.",
    sections: [{
      titre: "Bâtiment",
      prestations: [
        "Reconnaissance et études des sites (hydrologie, géologie, géotechnique)",
        "Étude et contrôle de l'exécution de projet",
        "Études et conception de structures : béton armé, béton précontraint, charpente métallique",
        "Avant-Projet Sommaire (APS)",
        "Avant-Projet Détaillé (APD)",
        "Dossier d'Appel d'Offres (DAO)",
        "Direction et contrôle d'exécution de travaux",
      ],
    }],
    images: ["img_p10_1", "img_p10_2", "img_p10_3", "img_p10_4"],
  },
  {
    slug: "hydraulique",
    numero: 5,
    titre: "Hydraulique",
    accroche: "Hydraulique urbaine, rurale, agricole et fluviale.",
    sections: [{
      titre: "Domaines hydrauliques",
      prestations: [
        "Hydraulique urbaine d'alimentation en eau potable (AEP) et assainissement urbain",
        "Hydraulique rurale et villageoise d'alimentation en eau potable (AEP)",
        "Hydraulique agricole et irrigation",
        "Hydraulique fluviale",
      ],
    }],
    sousDomaines: HYDRAULIQUE_LINKS,
    images: ["img_p10_5", "img_p11_1", "img_p12_1", "img_p13_1"],
  },
  {
    slug: "etudes-economiques-institutionnelles",
    numero: 6,
    titre: "Études économiques et institutionnelles",
    accroche: "Études macro-économiques, études de projet et diagnostic d'entreprise.",
    sections: [
      {
        titre: "Études macro-économiques",
        prestations: [
          "Études sectorielles (industrie, pêche, habitat, agriculture…)",
          "Bilans-diagnostics par branche d'activité : emplois, production, investissement, coût…",
        ],
      },
      {
        titre: "Études de projet",
        prestations: [
          "Études d'identification et de localisation",
          "Études de marché, de pré-faisabilité ou de faisabilité",
          "Assistance au montage institutionnel et financier",
        ],
      },
      {
        titre: "Diagnostic d'entreprise et assistance à la gestion",
        prestations: [
          "Analyse de la fonction administrative et financière et de la fonction commerciale",
          "Analyse de la fonction personnelle et du potentiel technique",
        ],
      },
      {
        titre: "Étude de faisabilité économique",
        prestations: [
          "Évaluation du contexte et de l'environnement",
          "Définition des besoins et des ressources",
          "Établissement des prévisions financières",
          "Analyse de la rentabilité et du retour sur investissement",
          "Évaluation de l'impact socio-économique",
          "Prise de décision finale (Go / No-Go)",
        ],
      },
      {
        titre: "Étude de faisabilité financière",
        prestations: [
          "Étude, recherche et analyse des informations préliminaires",
          "Analyse, définition des besoins et modélisation des hypothèses",
          "Analyse des flux de trésorerie (Cash-flow)",
          "Estimation de la rentabilité et calcul des ratios clés",
          "Simulation de scénarios et analyse des risques",
          "Évaluation finale et décision (Go / No-Go)",
        ],
      },
      {
        titre: "Étude de faisabilité commerce",
        prestations: [
          "Analyse globale et définition de marché",
          "Analyse et identification de la zone géographique des activités",
          "Identification de la cible et analyse de la demande",
          "Analyse de la concurrence",
          "Définition du mix-marketing et du plan opérationnel",
        ],
      },
    ],
    images: ["img_p14_4", "img_p14_1", "img_p14_2"],
  },
  {
    slug: "electricite-energies-renouvelables",
    numero: 7,
    titre: "Électricité et énergie renouvelable",
    accroche: "Centrales, réseaux électriques et dimensionnement des énergies renouvelables.",
    sections: [{
      titre: "Électricité / Énergie renouvelable",
      prestations: [
        "Étude des centrales thermiques et nucléaires",
        "Étude des centrales hydrauliques",
        "Étude et dimensionnement du transport des lignes à haute et très haute tension et d'acheminement de l'électricité",
        "Étude des réseaux à moyenne et basse tension",
        "Étude et dimensionnement de l'énergie solaire, avec capture des rayons du soleil via des panneaux photovoltaïques",
        "Étude et dimensionnement de l'énergie éolienne terrestre (onshore) ou en mer (offshore) pour transformer cette énergie mécanique en courant électrique",
        "Étude et dimensionnement de l'énergie hydraulique pour exploiter le mouvement de l'eau (fleuves, barrages, marées), actionner des turbines et produire de l'hydroélectricité",
      ],
    }],
    images: ["img_p13_5", "img_p13_6", "img_p13_7", "img_p13_8"],
  },
  {
    slug: "fluides",
    numero: 8,
    titre: "Fluides",
    accroche: "Études et dimensionnements des fluides frigorigènes et thermodynamiques.",
    sections: [{
      titre: "Fluide frigorigène et thermodynamique",
      prestations: [
        "Étude et dimensionnements de la compression (vapeur à haute pression)",
        "Étude et dimensionnements de condensation et liquéfaction",
        "Étude et dimensionnements sur l'évaporation de gaz à basse pression",
        "Étude et dimensionnements de rétroaction immédiate (Feedback)",
        "Étude et dimensionnements sur la concentration totale et fusion",
        "Étude et dimensionnements de la manipulation et récupération d'un fluide",
      ],
    }],
    images: ["img_p11_1", "img_p11_2", "img_p11_3", "img_p11_4"],
  },
  {
    slug: "ressources-en-eau",
    numero: 9,
    titre: "Ressources en eaux",
    accroche: "Reconnaissance, études hydrauliques, hydrogéologiques et gestion des ressources en eau.",
    sections: [{
      titre: "Ressources en eaux",
      prestations: [
        "Reconnaissance générale du site",
        "Études hydrauliques et hydrogéologiques",
        "Études des ressources en eau",
        "Calcul et dimensionnement des ouvrages d'art",
        "Contrôle et supervision des travaux",
      ],
    }],
    images: ["img_p12_2", "img_p12_3", "img_p12_4", "img_p12_6"],
  },
  {
    slug: "environnement-amenagement-territoire",
    numero: 10,
    titre: "Environnement & Aménagement du Territoire",
    accroche: "Diagnostic environnemental, stratégie ERC, planification territoriale et suivi.",
    sections: [
      {
        titre: "Inventaire ou diagnostic initial",
        prestations: [
          "Recensement des activités et des flux : consommations d'énergie, matières premières, déchets et pollution",
          "Analyse des états initiaux des sites et de leur environnement : eau, air, sols et biodiversité",
        ],
      },
      {
        titre: "Évaluation et prévision des impacts",
        prestations: [
          "Étude des conséquences directes et indirectes des activités sur l'environnement",
          "Identification et cotation des risques selon leur gravité et leur fréquence",
        ],
      },
      {
        titre: "Définition des mesures — stratégie ERC",
        prestations: [
          "Suppression des impacts négatifs dès la conception",
          "Réduction et minimisation des impacts",
          "Compensation et adoption d'une solution aux dégâts résiduels",
        ],
      },
      {
        titre: "Bilan-diagnostic du territoire",
        prestations: [
          "Collecte des données démographiques, économiques, environnementales et cartographiques, et des infrastructures existantes",
          "Analyse territoriale des forces, faiblesses, contraintes, potentialités, déséquilibres spatiaux et besoins prioritaires",
          "Prospective, définition des scénarios et projection à long terme",
          "Fixation des objectifs et choix stratégiques",
          "Montage institutionnel, financier et juridique",
          "Mise en œuvre et suivi",
        ],
      },
    ],
    images: ["img_p14_1", "img_p14_2", "img_p14_3", "img_p14_4"],
  },
];

export const HYDRAULIQUE_DOMAINS: Domain[] = [
  {
    slug: "hydraulique-urbaine-aep-assainissement",
    numero: 5,
    titre: "Hydraulique urbaine AEP et assainissement",
    accroche: "Alimentation en eau potable, collecte et traitement des eaux urbaines.",
    sections: [
      {
        titre: "Hydraulique urbaine d'alimentation en eau potable (AEP)",
        prestations: [
          "Étude de captage, prélèvement et extraction de l'eau (nappes souterraines par forage, rivières, lacs ou barrages)",
          "Étude de traitement sur la potabilisation et l'acheminement de l'eau",
          "Étude du stockage et de l'acheminement de l'eau potable vers des réservoirs ou des châteaux d'eau pour réguler la pression et garantir une réserve constante",
          "Étude de la distribution et du transport de l'eau à travers un réseau de canalisations souterraines jusqu'aux habitations, industries et borne-fontaine",
        ],
      },
      {
        titre: "Assainissement urbain",
        prestations: [
          "Étude de la collecte des eaux usées domestiques et industrielles via un réseau d'égouts",
          "Étude de l'évacuation et de la gestion des eaux de pluie à travers des caniveaux, bassins de rétention et réseaux spécifiques",
          "Étude du traitement, de l'épuration et de l'acheminement des eaux souillées",
          "Étude de la maintenance, de l'exploitation et de la surveillance des réseaux",
          "Études d'impact, dimensionnement des réseaux face à la croissance urbaine et modélisation hydraulique",
        ],
      },
    ],
    images: ["img_p11_1", "img_p11_2", "img_p11_3", "img_p11_4"],
  },
  {
    slug: "hydraulique-rurale-villageoise",
    numero: 5,
    titre: "Hydraulique rurale et villageoise",
    accroche: "Alimentation en eau potable et gestion durable des ouvrages ruraux.",
    sections: [{
      titre: "Hydraulique rurale et villageoise — alimentation en eau potable (AEP)",
      prestations: [
        "Étude sur la réalisation des forages et de puits pastoraux, artisanaux ou mécanisés",
        "Étude sur l'installation de systèmes d'exhaure",
        "Étude sur les réseaux de distribution, la création de borne-fontaine et de petits réseaux d'adduction d'eau potable (AEP)",
        "Étude sur la construction de mares artificielles et de puits pastoraux",
        "Étude sur la gestion des parcours, l'implantation rationnelle et les points d'eau",
        "Étude sur les ouvrages d'assainissement de base",
        "Assistance à la formation des associations d'usagers pour l'autonomisation financière et technique des ouvrages",
      ],
    }],
    images: ["img_p10_5", "img_p10_6", "img_p10_7", "img_p10_8"],
  },
  {
    slug: "hydraulique-agricole-irrigation",
    numero: 5,
    titre: "Hydraulique agricole et irrigation",
    accroche: "Conception et gestion des systèmes d'irrigation et des réseaux de distribution.",
    sections: [{
      titre: "Hydraulique agricole — irrigation (apport d'eau)",
      prestations: [
        "Étude de l'irrigation de surface (gravitaire)",
        "Étude de l'irrigation par aspersion",
        "Étude de l'irrigation localisée (goutte-à-goutte)",
        "Étude sur la conception et la gestion des ouvrages hydrauliques",
        "Étude des réseaux de distribution, de la construction de canaux d'irrigation, de conduites d'adduction principales et secondaires, et de l'installation de vannes de régulation",
      ],
    }],
    images: ["img_p12_1", "img_p12_2", "img_p12_3", "img_p12_4", "img_p12_5", "img_p12_6"],
  },
  {
    slug: "hydraulique-fluviale",
    numero: 5,
    titre: "Hydraulique fluviale",
    accroche: "Gestion des risques, prévention des inondations et aménagement des cours d'eau.",
    sections: [{
      titre: "Hydraulique fluviale",
      prestations: [
        "Étude sur la gestion des risques et la protection",
        "Étude sur la prévention des inondations, la modélisation des crues, la cartographie des zones inondables et la conception d'ouvrages de protection (digues, barrages de crête)",
        "Étude sur la gestion des sédiments et le transport du sable et des graviers (charriage) pour éviter l'envasement des cours d'eau ou le creusement excessif du lit",
        "Étude des infrastructures et du dimensionnement hydraulique des ouvrages d'art et des franchissements",
        "Étude sur les axes de navigation et les aménagements fluviaux des chenaux navigables",
        "Étude sur l'environnement et la restauration écologique des tracés naturels, et l'amélioration de la biodiversité des cours d'eau",
      ],
    }],
    images: ["img_p13_1", "img_p13_2", "img_p13_3", "img_p13_4"],
  },
];

export const ALL_DOMAIN_PAGES = [...DOMAINS, ...HYDRAULIQUE_DOMAINS];

export function domainCover(d: Domain): string {
  return photo(d.images[0]);
}

export function getDomain(slug: string): Domain | undefined {
  return ALL_DOMAIN_PAGES.find((d) => d.slug === slug);
}

export type Partner = { nom: string; domaine?: string; logo?: string };

import isdbLogo from "@/assets/partners-banque_islamique.png.asset.json";
import crsLogo from "@/assets/partners-crs.png.asset.json";
import eauViveLogo from "@/assets/partners-eau_vive.png.asset.json";
import pamLogo from "@/assets/partners-pam.png.asset.json";
import unicefLogo from "@/assets/partners-unicef1.png.asset.json";
import undpLogo from "@/assets/partners-unpd.png.asset.json";
import worldBankLogo from "@/assets/partners-banque_mondiale.png.asset.json";
import badLogo from "@/assets/partners-bad.png.asset.json";
import afdLogo from "@/assets/partners-afd.png.asset.json";
import ueLogo from "@/assets/partners-ue.png.asset.json";
import cbltLogo from "@/assets/partners-cblt.png.asset.json";
import cemacLogo from "@/assets/partners-cemac-2.png.asset.json";

export const PARTNERS: Partner[] = [
  { nom: "Banque Africaine de Développement (BAD)", domaine: "afdb.org", logo: badLogo.url },
  { nom: "Banque Mondiale", domaine: "worldbank.org", logo: worldBankLogo.url },
  { nom: "Agence Française de Développement (AFD)", domaine: "afd.fr", logo: afdLogo.url },
  { nom: "PNUD", domaine: "undp.org", logo: undpLogo.url },
  { nom: "UNICEF", domaine: "unicef.org", logo: unicefLogo.url },
  { nom: "PAM", domaine: "wfp.org", logo: pamLogo.url },
  { nom: "Catholic Relief Services (CRS)", domaine: "crs.org", logo: crsLogo.url },
  { nom: "Banque Islamique de Développement (BID)", domaine: "isdb.org", logo: isdbLogo.url },
  { nom: "Union Européenne", domaine: "european-union.europa.eu", logo: ueLogo.url },
  { nom: "Eau Vive International", domaine: "eau-vive.org", logo: eauViveLogo.url },

  { nom: "Commission du Bassin du Lac Tchad (CBLT)", domaine: "cblt.org", logo: cbltLogo.url },
  { nom: "CEMAC", domaine: "cemac.int", logo: cemacLogo.url },
];

export const partnerLogo = (p: Partner) =>
  p.logo ??
  (p.domaine
    ? `https://logo.clearbit.com/${p.domaine}?size=256`
    : undefined);


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
