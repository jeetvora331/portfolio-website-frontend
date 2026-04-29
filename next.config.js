/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			"assets.acme.com",
			"images.pexels.com",
			"images.unsplash.com",
			"zedodesigners.com",
			"res.cloudinary.com",
			"cdn.sanity.io"
		],
	},
};

module.exports = nextConfig;
