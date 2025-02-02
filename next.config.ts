import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["github.com"], // Permite carregar imagens do GitHub
  },
};

export default nextConfig;
