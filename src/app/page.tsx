import CGUForm from "@/components/cgu-form";
import { DocumentTextIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="mx-auto h-12 w-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
            <DocumentTextIcon
              className="h-6 w-6 text-blue-600 dark:text-blue-400"
              aria-hidden="true"
            />
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Générateur de CGU
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400 sm:mt-4">
            Créez facilement des Conditions Générales d&apos;Utilisation
            personnalisées pour votre site web ou application
          </p>
        </div>

        <CGUForm />

        <div className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>
            Cette application génère des CGU à titre indicatif uniquement. Pour
            une conformité juridique complète, consultez un professionnel du
            droit.
          </p>
        </div>
      </div>
    </div>
  );
}
