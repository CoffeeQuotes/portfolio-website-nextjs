/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        domains: ['avatars.githubusercontent.com'],
    },
}

module.exports = nextConfig
