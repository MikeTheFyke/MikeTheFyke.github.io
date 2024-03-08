/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	images: {
		loader: "custom",
		loaderFile: "./my-loader.ts",
	},
	reactStrictMode: true,
};

module.exports = nextConfig;
