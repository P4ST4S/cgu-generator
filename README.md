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
- Système de tracking anonymisé respectueux du RGPD
- Bouton de feedback permettant aux utilisateurs de donner leur avis

## Stack technique

- Next.js 14+ avec App Router
- TypeScript pour la sécurité des types
- React Hook Form + Zod pour la validation de formulaire
- Tailwind CSS pour un design moderne et responsive
- Puppeteer pour la génération de PDF
- HeroIcons pour les icônes SVG
- Plausible Analytics pour les statistiques respectueuses du RGPD
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
- `src/hooks/` : Hooks React personnalisés
  - `useAnalytics.ts` : Hook pour le suivi des événements utilisateur

## Configuration

Le projet utilise des variables d'environnement pour configurer certaines fonctionnalités. Copiez le fichier `.env.example` vers `.env.local` et ajustez les variables selon vos besoins :

```bash
# Copier le fichier d'exemple
cp .env.example .env.local

# Éditer les variables
nano .env.local
```

Variables d'environnement disponibles :

- `ANALYTICS_DOMAIN` : Domaine du script Plausible Analytics (par défaut : "plausible.io")
- `ANALYTICS_SITE_ID` : Identifiant de votre site dans Plausible Analytics
- Variables pour l'envoi d'emails (optionnelles) : `EMAIL_HOST`, `EMAIL_PORT`, `EMAIL_USER`, `EMAIL_PASSWORD`, `EMAIL_RECIPIENT`

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

## Système de feedback par email

Le générateur de CGU intègre un système de feedback permettant aux utilisateurs de soumettre leurs commentaires et suggestions :

- **Bouton de feedback** : Présent sur toutes les pages, offrant une accessibilité constante
- **Formulaire simple** : Nom (optionnel), email et message
- **Notification par email** : Les feedbacks sont envoyés par email à l'administrateur du site
- **Validation côté serveur** : Protection contre les abus et les données malformées

Pour activer les notifications par email, configurez les variables suivantes dans votre fichier `.env.local` :

```
EMAIL_HOST=smtp.votreserveur.com
EMAIL_PORT=587
EMAIL_USER=votre@email.com
EMAIL_PASSWORD=votremotdepasse
EMAIL_RECIPIENT=destinataire@email.com
```

Cette fonctionnalité utilise Nodemailer pour l'envoi d'emails de manière sécurisée et fiable.

## Système d'analytics respectueux du RGPD

Cette application utilise [Plausible Analytics](https://plausible.io/), une solution d'analyse d'audience respectueuse de la vie privée :

- **Sans cookies** : Ne nécessite pas de bannière de consentement
- **Entièrement anonymisé** : Ne collecte aucune donnée personnelle
- **RGPD / GDPR compliant** : Conforme aux réglementations européennes
- **Léger** : Script de moins de 1 Ko, n'affecte pas les performances

Les données d'analytics sont utilisées uniquement pour améliorer le service et comprendre comment les utilisateurs interagissent avec l'application.

## Avertissement

Les CGU générées par cette application sont fournies à titre indicatif uniquement. Pour une conformité juridique complète, consultez un professionnel du droit.
