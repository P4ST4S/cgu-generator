# Générateur de CGU

Une application SaaS complète permettant de générer des Conditions Générales d'Utilisation personnalisées pour votre site web ou application.

## Fonctionnalités

- Formulaire complet pour personnaliser les CGU selon vos besoins
- Support pour différents types de services (blog, e-commerce, SaaS, applications mobiles)
- Options de juridiction (France, Europe, États-Unis, International)
- Personnalisation des données collectées et des services tiers utilisés
- Génération de CGU en HTML adaptées à votre activité
- Téléchargement des CGU au format PDF
- Copie du texte des CGU dans le presse-papier
- Support du mode sombre/clair
- Interface entièrement responsive

## Stack technique

- Next.js 14+ avec App Router
- TypeScript pour la sécurité des types
- React Hook Form + Zod pour la validation de formulaire
- Tailwind CSS pour un design moderne et responsive
- Puppeteer pour la génération de PDF
- HeroIcons pour les icônes SVG
- Approche stateless (pas de base de données requise)

## Installation

```bash
# Cloner le dépôt
git clone https://github.com/P4ST4S/cgu-generator.git
cd cgu-generator

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir l'application.

## Structure du projet

- `src/app/` : Pages de l'application (formulaire, résultat) et mise en page globale
  - `api/` : Routes API pour la génération de CGU et le téléchargement PDF
  - `result/` : Page d'affichage des CGU générées
- `src/components/` : Composants UI réutilisables
  - `ui/` : Composants d'interface utilisateur de base (boutons, formulaires, etc.)
- `src/lib/` : Logique métier
  - `types.ts` : Types TypeScript pour les données du formulaire
  - `schema.ts` : Schémas de validation Zod
  - `generate-cgu.ts` : Logique de génération des CGU en HTML

## Développement

```bash
# Lancer le serveur de développement
npm run dev

# Linter
npm run lint

# Build pour production
npm run build

# Démarrer la version de production
npm start
```

## Mode sombre/clair

L'application supporte automatiquement le mode sombre et clair, avec:

- Détection des préférences système
- Possibilité de basculer manuellement entre les modes
- Persistance de la préférence utilisateur

## Déploiement

Cette application peut être facilement déployée sur Vercel ou toute autre plateforme supportant Next.js.

```bash
# Construction pour production
npm run build

# Déploiement sur Vercel
vercel
```

## Notes juridiques

Cette application génère des CGU à titre indicatif uniquement. Pour une conformité juridique complète, il est recommandé de consulter un professionnel du droit pour adapter les conditions à votre cas spécifique.

## Licence

MIT

## Avertissement

Les CGU générées par cette application sont fournies à titre indicatif uniquement. Pour une conformité juridique complète, consultez un professionnel du droit.
