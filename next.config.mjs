/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: AWS Amplify publishes the generated out/ folder (see amplify.yml).
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
