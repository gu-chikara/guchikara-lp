import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/guchikara-lp",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
