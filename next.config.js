const {
    PHASE_DEVELOPMENT_SERVER,
    PHASE_PRODUCTION_BUILD,
} = require('next/constants')

module.exports = (phase) => {
    // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environment variable
    const isDev = phase === PHASE_DEVELOPMENT_SERVER
    // when `next build` or `npm run build` is used
    const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1'
    // when `next build` or `npm run build` is used
    const isStaging =
        phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === '1'

    console.log(`isDev:${isDev}  isProd:${isProd}   isStaging:${isStaging}`)

    const env = {};

    // next.config.js object
    return {
        output: 'standalone',
        images: {
            domains: ['assets.maccarianagency.com'],
            remotePatterns: [
                {
                    protocol: 'https',
                    hostname: 'rameyroadeus01.blob.core.windows.net',
                    port: '',
                    pathname: '/westover-content/**',
                },
            ],
        },
        env,
    }
}
