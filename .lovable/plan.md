## 1. Photos des dirigeants pays

Uploader les 4 photos fournies sur le CDN et les rattacher au bon pays/personne (lecture des noms sur les plaques) :

| Photo | Pays | Dirigeant |
|---|---|---|
| niger7.png (boubou jaune) | Niger | Mahaman Ismailou Abdou — Niamey |
| TCHAD.jpeg (veste noire) | Tchad | Souleyman Haroun — DG SIAT Tchad |
| mali2.png (boubou blanc) | Mali | Yaya Issa Faradjallah — DG SIAT Mali |
| 25.png (veste bleue) | RCA | Oumar Touré — DG SIAT RCA |

Chaque photo est ajoutée en `photo` du contact correspondant dans `src/lib/site-data.ts`, et s'affiche donc dans les cartes pays de la page Contact (grande photo + nom + infos au survol), comme pour le Cameroun.

## 2. Nouveau pays : Mauritanie

- Génération d'une photo de DG dans le même style (bureau SIAT, logo au mur, drapeau SIAT, plaque nominative, casque de chantier) pour un « DG SIAT MAURITANIE » à Nouakchott.
- Ajout du pays dans `COUNTRIES` (statut Représentation, ville Nouakchott, drapeau `mr`, requête carte Nouakchott) avec un contact dirigeant.
- Ajout de la Mauritanie dans la carte d'Afrique et, le cas échéant, dans les mentions « six pays » qui deviennent « sept pays ».

Question ouverte : nom, e-mail et téléphones du responsable Mauritanie. À défaut, je mets un contact générique (`contact@siat-engineering.com`) que vous pourrez corriger.

## 3. « Ils nous font confiance » plus visible

Titre passé en `section-heading` (rouge, souligné bleu) de taille nettement supérieure, logos partenaires agrandis (~h-20) et cartes du marquee élargies, avec plus d'espacement.

## 4. Icônes en bleu

Dans la section « Qualité & conformité / Rigueur institutionnelle / Ancrage régional » de l'accueil, les icônes passent de rouge (`text-accent`) à bleu (`text-primary`). Même traitement pour les autres icônes décoratives équivalentes des sections d'accueil (les boutons d'action restent rouges).

## 5. Carte d'Afrique interactive (page Contact)

Refonte de `AfricaPresenceMap` :
- Tous les pays d'Afrique en rouge SIAT ; les pays de présence (Cameroun, RCA, Tchad, Niger, Mali, Nigeria, Mauritanie) en bleu marine.
- Au survol d'un pays de présence : mise en évidence + infobulle affichant pays, ville, statut, dirigeant, téléphone et e-mail.
- La carte reste sous le formulaire, derrière le petit bouton discret d'affichage déjà en place.

## Détails techniques

- Assets via `lovable-assets create` depuis `/mnt/user-uploads/`, pointeurs `.asset.json` dans `src/assets/`.
- Photo Mauritanie générée en `premium` (texte de la plaque nominative lisible).
- Coordonnées du marqueur Nouakchott ajoutées dans `PRESENCE`, infobulle en état React local (pas de dépendance nouvelle).
