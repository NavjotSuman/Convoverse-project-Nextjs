/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { hostname: "sleek-canary-905.convex.cloud" }
        ]
    }
};

export default nextConfig;
