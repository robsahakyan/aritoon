import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // The root layout lives in app/[lang], so unmatched URLs need a standalone 404 page.
    globalNotFound: true,
  },
};

export default nextConfig;
