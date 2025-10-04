/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    // experimental: {
    //     outputStandalone: true,
    // }
    async rewrites() {
        return [
            {
                source: '/.well-known/webfinger',
                destination: '/api/.well-known/webfinger'
            }
        ];
    }
};


export default nextConfig;
