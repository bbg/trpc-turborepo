/**
 * BEGIN
 */

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@acme/trpc", "@acme/db"],
};

export default nextConfig;

/**
 * END
 */
