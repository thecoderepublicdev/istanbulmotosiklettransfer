/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'X-Frame-Options',
              value: 'DENY',
            },
            {
              key: 'Content-Security-Policy',
              value:"default-src 'self' *.googleapis.com; script-src 'self' https: 'unsafe-inline' 'unsafe-eval';img-src https: data: 'unsafe-inline';style-src https: 'unsafe-inline';object-src 'none';child-src 'self';frame-ancestors 'none';frame-src 'self';connect-src 'self' *.hotjar.com *.doubleclick.net *.google-analytics.com *.addthis.com *.google.com *.cevizserver.com *.pinterest.com;base-uri 'self';form-action 'self';font-src https: data: 'self' *.fontawesome.com; upgrade-insecure-requests; block-all-mixed-content;"
            },
            {
              key: 'X-Content-Type-Options',
              value:'nosniff'
            },
            {
              key: 'Referrer-Policy',
              value: 'strict-origin-when-cross-origin'
            },
            {
              key:'Permissions-Policy',
              value:'geolocation=(self "https://istanbulmotosiklettransfer.com"), camera=()'
            }
          ],
        },
      ];
  },   
}

module.exports = nextConfig
