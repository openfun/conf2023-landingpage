const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

const withExportImages = require('next-export-optimize-images')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = withExportImages((phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return nextConfig;
  }

  return {
    ...nextConfig,
  };
});
