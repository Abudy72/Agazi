import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve = {
      ...config.resolve,
      fallback: {
        ...config.resolve?.fallback,
        events: require.resolve("events"), // Fix `node:events` issue
      },
    };
    return config;
  },
};

export default nextConfig;
