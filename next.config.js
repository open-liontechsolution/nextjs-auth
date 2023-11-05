const path = require('path');
/** @type {import('next').NextConfig} */
const nextConfig = {
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
		watch: true,
	},
	compiler: {
		reactRemoveProperties: true,
	},
};

module.exports = nextConfig;
