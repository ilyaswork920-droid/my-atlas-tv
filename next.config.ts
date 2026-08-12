import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  agentRules: false,
  allowedDevOrigins: ["localhost", "127.0.0.1", "192.168.1.71"],
  images: {
    formats: ["image/avif", "image/webp"],
    localPatterns: [
      { pathname: "/brand/logo.png", search: "?v=2" },
      { pathname: "/images/**" },
    ],
  },
};

export default nextConfig;
