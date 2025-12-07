// next.config.ts
import type { NextConfig } from 'next';

const useBasePath = process.env.NEXT_PUBLIC_BASEPATH === 'true';

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: 'export',
  basePath: useBasePath ? '/portfolio' : '',
  assetPrefix: useBasePath ? '/portfolio/' : '',
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
