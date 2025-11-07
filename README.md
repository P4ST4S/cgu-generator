# CGUgen - Générateur de CGU Moderne

Un site web SaaS moderne et professionnel spécialisé dans la génération automatique de Conditions Générales d'Utilisation et de Confidentialité.

🌐 **Site en production** : [https://www.cgu-generator.com/](https://www.cgu-generator.com/)

## Caractéristiques du Design

- **Design minimaliste et flat** avec un fond clair
- **Palette de couleurs** : Turquoise (#1BAAA0) avec accents bleu-vert
- **Typographie** : Inter (Google Fonts)
- **Interface responsive** avec Tailwind CSS v4
- **Animations subtiles** sur les interactions (hover scale 1.05)
- **Icônes** : SVG inline style outline

## Structure du Site

### 1. Navbar (Fixe)
- Logo minimal "CGUgen"
- Liens de navigation : Fonctionnalités, Tarifs, À propos, Connexion
- Bouton CTA "Créer mon document"

### 2. Hero Section
- Grand titre accrocheur
- Sous-titre explicatif
- Deux CTA : "Essayer gratuitement" et "Voir la démo"
- Illustration moderne d'un document

### 3. Section Fonctionnalités
Quatre cartes avec icônes :
- Personnalisation complète
- Conforme au RGPD
- Export PDF & HTML
- Mises à jour automatiques

### 4. Section Aperçu/Démo
- Mockup du générateur (formulaire + aperçu live)
- Interface split-screen
- Prévisualisation en temps réel

### 5. Section Tarifs
Trois plans :
- **Gratuit** : Pour découvrir et tester
- **Pro** : Pour les professionnels (29€/mois)
- **Entreprise** : Sur mesure

### 6. Section Témoignages
- 3 avis clients avec avatars
- Notes 5 étoiles
- Statistiques (10k+ documents, 5k+ entreprises, 4.9/5)

### 7. Footer
- Liens vers les pages légales (CGU, Politique de confidentialité)
- Réseaux sociaux
- Copyright

## Technologies Utilisées

- **Framework** : Next.js 16.0.1 (App Router)
- **React** : 19.2.0
- **Styling** : Tailwind CSS v4
- **Fonts** : Inter (Google Fonts)
- **TypeScript** : Support complet

## Installation

```bash
# Installer les dépendances
pnpm install

# Lancer le serveur de développement
pnpm dev

# Builder pour la production
pnpm build

# Lancer en production
pnpm start
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## Architecture

```
/app
  ├── layout.tsx       # Layout principal avec metadata
  ├── page.tsx         # Page d'accueil assemblant tous les composants
  └── globals.css      # Styles globaux et variables CSS

/components
  ├── Navbar.tsx       # Barre de navigation fixe
  ├── Hero.tsx         # Section hero avec CTA
  ├── Features.tsx     # Grille de fonctionnalités
  ├── Demo.tsx         # Aperçu du générateur
  ├── Pricing.tsx      # Cartes de tarifs
  ├── Testimonials.tsx # Témoignages et stats
  └── Footer.tsx       # Footer avec liens légaux
```

## Palette de Couleurs

- **Primary** : #1BAAA0 (Turquoise)
- **Accent** : #14968D (Turquoise foncé)
- **Secondary** : #F5F7FA (Gris clair)
- **Foreground** : #1a1a1a (Texte principal)
- **Background** : #ffffff (Blanc)

## Prochaines Étapes

Ce site est prêt à être connecté à :
- Une API d'IA pour la génération de CGU
- Un système d'authentification
- Une base de données pour stocker les documents
- Un système de paiement pour les plans Pro et Entreprise

## Déploiement

Le déploiement le plus simple se fait sur [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Consultez la [documentation de déploiement Next.js](https://nextjs.org/docs/app/building-your-application/deploying) pour plus de détails.

## Licence

© 2025 CGUgen – Tous droits réservés
