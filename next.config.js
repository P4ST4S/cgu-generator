const nextConfig = {
  eslint: {
    // Désactiver la vérification ESLint lors du build
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Désactiver la vérification TypeScript lors du build
    ignoreBuildErrors: true,
  },
  serverExternalPackages: ["puppeteer"],
};

module.exports = nextConfig;
