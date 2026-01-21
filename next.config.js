/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/intro1',
  reactStrictMode: true,
  output: 'standalone', // Docker 최적화를 위한 standalone 빌드 모드
}

module.exports = nextConfig
