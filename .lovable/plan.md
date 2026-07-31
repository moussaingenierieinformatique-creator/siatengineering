## 1. Textes en gras, police Times New Roman

Les paragraphes concernés utilisent tous l'utilitaire `text-block` (accueil « Ressources techniques », intro « 12 domaines d'expertise », et tous les sous-textes équivalents des autres pages).

- Dans `src/styles.css`, ajouter à `@utility text-block` : `font-family: "Times New Roman", Times, serif;` et `font-weight: 700;`, en gardant la justification actuelle.
- Effet global immédiat sur accueil, à propos, savoir-faire, contact, carrière — aucun autre changement de mise en page.

## 2. Logos des partenaires

Actuellement les logos viennent du service de favicons Google (basse qualité). Les fichiers fournis seront hébergés en CDN et utilisés en priorité.

- Créer les pointeurs d'assets pour : IsDB (Banque Islamique de Développement), CRS (Catholic Relief Services), Eau Vive, PAM, UNICEF, PNUD/UNDP.
- Dans `src/lib/site-data.ts` :
  - ajouter un champ `logo` optionnel au type `Partner`, renseigné avec l'URL CDN pour ces six partenaires ;
  - `partnerLogo()` renvoie ce logo s'il existe, sinon le favicon comme aujourd'hui ;
  - **supprimer** « Bureau Veritas Certification » et « CEEAC » ;
  - ajouter CRS, UNICEF et PAM à la liste (les autres existent déjà).
- Dans le défilé de l'accueil (`src/routes/index.tsx`), agrandir légèrement le cadre logo (`h-10` → `h-12`) pour que ces logos rectangulaires restent lisibles ; le reste du style est conservé.

## Point de vigilance

Le fichier fourni sous le nom `pam.jpeg` est l'emblème de l'**OMS** (Organisation mondiale de la santé), pas celui du PAM. Je l'utiliserai tel quel sauf indication contraire — dites-moi si vous voulez le remplacer ou l'étiqueter « OMS ».
