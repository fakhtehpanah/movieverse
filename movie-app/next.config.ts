import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {

        protocol: "https",
        hostname: "image.tmdb.org",
        pathname: "/t/p/**",
      }
    ]
  },
  /* config options here */
  reactStrictMode: true,
};

export default nextConfig;
