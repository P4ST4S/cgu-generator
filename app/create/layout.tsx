import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Créer vos CGU - CGUgen',
  description: 'Générez vos Conditions Générales d\'Utilisation personnalisées en quelques minutes. Formulaire simple et intuitif, aperçu en temps réel.',
  keywords: ['CGU', 'conditions générales', 'générateur', 'juridique', 'entreprise'],
  openGraph: {
    title: 'Créer vos CGU - CGUgen',
    description: 'Générez vos Conditions Générales d\'Utilisation personnalisées en quelques minutes',
    type: 'website',
  },
};

export default function CreateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
