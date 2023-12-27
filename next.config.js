/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			'localhost',
			'softwarefndr.com',
			'software-finder.blr1.digitaloceanspaces.com',
			'softwarefinder.com',
			'software-finder-prod.blr1.digitaloceanspaces.com',
			'softwarefndr.comundefined',
		],
	},
};

module.exports = nextConfig;
