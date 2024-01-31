/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["rtmxamydngrvgpymydfk.supabase.co"],
  },
};

module.exports = nextConfig;
