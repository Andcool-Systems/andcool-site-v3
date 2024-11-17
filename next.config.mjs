/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    experimental: {
        missingSuspenseWithCSRBailout: false
    },
    webpack(config) {
        config.cache = false;
        return config;
    },
};

export default nextConfig;