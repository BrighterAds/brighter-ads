# Brighter Ads — Design system

## Identité

Une interface sombre, des titres expressifs et quatre accents lumineux issus du logo fourni. Ce document est la référence pour toute évolution visuelle du site. Les valeurs CSS sont définies dans `css/styles.css`, dans `:root`.

## Palette de marque

Utiliser exclusivement ces quatre couleurs pour les accents. Ne pas ajouter d'autre couleur de thème sans décision explicite.

| Couleur | Valeur | Variable CSS | Usage |
| --- | --- | --- | --- |
| Citron | `#D4FF3D` | `--lime` | Action principale, repères, lettre « b » du logo |
| Cyan | `#35C1FF` | `--blue` | Liens, acquisition, focus des champs |
| Magenta | `#FF3DAE` | `--magenta` | Création, accents secondaires |
| Violet | `#9B5CFF` | `--violet` | Analyse de données, réservation, accents secondaires |

Les nuances intermédiaires sont réservées aux dégradés entre ces accents. Pour les fonds, bordures et halos colorés, employer ces mêmes couleurs avec une opacité réduite. Ne pas créer de nouvelles teintes indépendantes.

## Neutres et fonds

Ces couleurs accompagnent la palette de marque ; elles servent aux surfaces, aux textes et aux contrastes.

| Valeur | Variable CSS | Usage |
| --- | --- | --- |
| `#07070B` | `--bg` | Fond principal |
| `#0C0C13` | `--bg-alt` | Fond alternatif, navigation mobile |
| `#111118` | `--surface` | Cartes et champs |
| `#15151D` | `--surface-2` | Surfaces secondaires |
| `#14101C` | `--surface-book` | Extrémité du dégradé du panneau de réservation |
| `#F5F5F7` | `--text` | Texte principal |
| `#9A9AA8` | `--text-dim` | Texte secondaire |
| `#5C5C68` | `--text-faint` | Mentions discrètes |
| `#08080B` | `--on-accent` | Texte sur les boutons citron |
| `#000000` | `--black` | Fond du favicon, fond noir, masques |
| `#FFFFFF` | `--white` | Surface d'intégration, bordures translucides |

Les bordures utilisent le blanc à 9 % (`--border`) ou 16 % (`--border-strong`). La navigation utilise le fond principal à 75 %. Les autres transparences sont des déclinaisons des couleurs ci-dessus.

## Règles d'utilisation

- Réutiliser les variables de `:root` pour les couleurs opaques ; ne pas disperser de nouvelles valeurs hexadécimales dans les composants.
- Réserver le citron aux actions importantes pour qu'elles restent immédiatement repérables.
- Garder les longs textes en `--text` ou `--text-dim`. Réserver `--text-faint` aux mentions discrètes, sans information essentielle.
- Ne pas transmettre une information uniquement par la couleur : ajouter un libellé, une icône ou un état explicite.
- Conserver des indicateurs de focus visibles et le mode de réduction des animations.
- Le hero utilise du texte et des liens HTML, à côté d’une illustration distincte de quatre apps mobiles fictives : fitness, voyage, jeu de puzzle au premier plan et shopping. Le visuel est transparent et servi en WebP adaptatif depuis `images/`. Pas de bannière raster plein écran, de carrousel ni d’animation décorative. Les scènes dans les apps peuvent conserver leurs couleurs naturelles ; l’interface du site reste dans la palette de marque. Ces exemples ne représentent ni des clients ni des résultats réels.

## Typographie

| Usage | Police | Variable CSS |
| --- | --- | --- |
| Titres et signature | Bricolage Grotesque, graisses 500, 700 et 800 | `--font-display` |
| Texte et boutons | Inter, graisses 400 à 700 | `--font-body` |
| Libellés courts, badges et repères | JetBrains Mono, graisses 500 et 600 | `--font-mono` |

Interligne du texte : `1.5`. Interligne des titres : `1.08`. Les titres s'adaptent à la largeur de l'écran avec `clamp()`.

## Mise en page et composants

- Conteneur principal : `1180px` maximum (`--container`), marges internes horizontales de `28px`.
- Rayons : `20px` (`--radius-lg`), `14px` (`--radius-md`), `8px` (`--radius-sm`). Les boutons et badges utilisent `999px`.
- Bouton principal : fond citron et texte sombre. Bouton secondaire : fond transparent et bordure claire.
- Cartes de service : un accent par discipline, avec une bordure discrète et un halo au survol.
- Conserver les points de rupture existants propres aux composants, ainsi que leur ordre de lecture sur mobile.

## Favicon

`icons/favicon.svg` conserve le « b » et l'anneau cyan, magenta, violet et citron, sans police externe. Il suit le thème du navigateur avec `prefers-color-scheme` : lettre citron sur fond noir en mode sombre, lettre `#08080B` sur fond `#F5F5F7` en mode clair. Sans prise en charge des media queries, il conserve la version sombre. En mode couleurs forcées, une déclaration HTML avec `media="(forced-colors: active)"` sélectionne `icons/favicon-contrast.svg`, monochrome noir et blanc, adapté au thème clair ou sombre. La sélection se fait dans la page car le navigateur ne transmet pas toujours `forced-colors` à l'intérieur d'un SVG utilisé comme image.

Les déclinaisons sont déclarées dans `index.html`, `privacy-policy.html` et `legal-notice.html` :

| Fichier | Usage |
| --- | --- |
| `icons/favicon.svg` | Navigateurs modernes, thèmes clair et sombre |
| `icons/favicon-contrast.svg` | Couleurs forcées, lettre et anneau noirs sur fond blanc ou blancs sur fond noir |
| `favicon.ico` | Compatibilité et chargement automatique à la racine, tailles 16, 32 et 48 px |
| `icons/favicon-16x16.png`, `icons/favicon-32x32.png` | Favicons PNG de secours |
| `icons/apple-touch-icon.png` | Icône iOS/iPadOS de 180 px, fond opaque et carré ; le système arrondit les coins |
| `icons/safari-pinned-tab.svg` | Masque monochrome transparent pour les onglets épinglés Safari |
| `icons/icon-192.png`, `icons/icon-512.png` | Exports raster supplémentaires de 192 et 512 px |
| `icons/icon-maskable-512.png` | Icône Android avec fond opaque et dessin réduit à 80 % pour rester dans le cercle de sécurité central |

Les PNG et l'ICO utilisent la version sombre, lisible sur les deux thèmes. La barre du navigateur conserve `#07070B`, comme le fond du site. Le site ne déclare pas de manifeste d'application web, afin de ne pas déclencher de proposition d'installation automatique sur mobile.

Pour réexporter les images depuis `icons/favicon.svg`, figer les couleurs sombres, puis rasteriser aux dimensions indiquées. Pour Apple, retirer l'arrondi du fond. Pour l'icône maskable, conserver un fond carré plein et appliquer `translate(6.4 6.4) scale(0.8)` à l'anneau et à la lettre dans le repère 64 × 64. Le masque Safari reprend uniquement la lettre et l'anneau en noir sur fond transparent.

Les couleurs du SVG sont explicites, car un favicon chargé comme fichier séparé n'hérite pas des variables CSS du site. Si la palette ou le dessin change, mettre à jour ensemble `css/styles.css`, les SVG, les exports raster et ce document.
