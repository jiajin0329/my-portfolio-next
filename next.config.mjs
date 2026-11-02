/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Allow the loopback address to load the client scripts used by video controls.
  allowedDevOrigins: ['127.0.0.1'],
}

export default nextConfig
