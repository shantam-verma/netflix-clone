const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "/",
      },
    ];
  },
  images: {
    domains: ["image.tmdb.org"], // Add the domains you're using for images
  },
};

export default nextConfig;
