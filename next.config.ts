import type { NextConfig } from 'next';

const useBasePath = process.env.NEXTPUBLIC_BASE_PATH;
const nextConfig: NextConfig = {
  reactCompiler: true,
  output: 'export',
  basePath: useBasePath ? '/portfolio' : '',
  assetPrefix: useBasePath ? '/portfolio' : '',
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
