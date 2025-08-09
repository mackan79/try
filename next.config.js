/** Next.js config placeholder */
const nextConfig = { reactStrictMode: true }
module.exports = nextConfig

module.exports = {
  images: {
    domains: ['openweathermap.org', 'api.mapbox.com'],
  },
  env: {
    OPENWEATHER_API_KEY: process.env.OPENWEATHER_API_KEY,
    MAPBOX_ACCESS_TOKEN: process.env.MAPBOX_ACCESS_TOKEN,
    FISHING_REPORTS_API: process.env.FISHING_REPORTS_API,
    DATABASE_URL: process.env.DATABASE_URL
  }
};
