/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                hostname: "*"
            }
        ]
    }, experimental: {
        instrumentationHook: true,
    },
};

export default nextConfig;
