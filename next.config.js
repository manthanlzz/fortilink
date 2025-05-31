const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: false,  // <-- Disable CSS minification & optimization
  },

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

    // Add alias for "@/src"
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@": path.resolve(__dirname, "src"),
    };

    return config;
  },
};

module.exports = nextConfig;
