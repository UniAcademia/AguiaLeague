const discordOauth2Scopes = ['identify', 'email', 'guilds'].join('%20');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/login',
        destination: `https://discord.com/api/oauth2/authorize?client_id=${process.env.DISCORD_CLIENT_ID}&redirect_uri=${process.env.DISCORD_REDIRECT_URI}&response_type=code&scope=${discordOauth2Scopes}`,
        permanent: false,
        basePath: false,
      },
    ];
  },
};

module.exports = nextConfig;
