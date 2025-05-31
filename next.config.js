/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { dev }) {
    // Existing SVG handling
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: ["@svgr/webpack"],
      }
    );

    fileLoaderRule.exclude = /\.svg$/i;

    // Disable CSS minimizer only in production builds
    if (!dev && config.optimization.minimizer) {
      config.optimization.minimizer = config.optimization.minimizer.filter(
        (plugin) => plugin.constructor.name !== "CssMinimizerPlugin"
      );
    }

    return config;
  },
};

module.exports = nextConfig;
