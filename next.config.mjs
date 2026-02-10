/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    useCache: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
