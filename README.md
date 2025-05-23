# Générateur de CGU

Une application SaaS complète permettant de générer des Conditions Générales d'Utilisation personnalisées pour votre site web ou application.

## Fonctionnalités

- Formulaire complet pour personnaliser les CGU
- Génération de CGU basée sur vos réponses
- Téléchargement des CGU au format PDF
- Copie du texte des CGU dans le presse-papier

## Stack technique

- Next.js 14+ avec App Router
- TypeScript
- React Hook Form + Zod pour la validation
- Tailwind CSS pour le design
- Puppeteer pour la génération de PDF
- Approche stateless (pas de base de données)

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

- `app/` : Pages de l'application (formulaire, résultat)
- `components/` : Composants UI réutilisables
- `lib/` : Logique de génération des CGU
- `app/api/` : Routes API pour la génération et le téléchargement

## Déploiement

Cette application peut être facilement déployée sur Vercel ou toute autre plateforme supportant Next.js.

```bash
npm run build
```

## Avertissement

Les CGU générées par cette application sont fournies à titre indicatif uniquement. Pour une conformité juridique complète, consultez un professionnel du droit.
