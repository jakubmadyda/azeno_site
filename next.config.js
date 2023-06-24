/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'loremflickr.com',
                port: '',
                pathname: '/640/480/people'
            }
        ]
    }
}

const withNextIntl = require('next-intl/plugin')(
    './src/i18n.ts'
);


module.exports = withNextIntl({
    ...nextConfig
});
