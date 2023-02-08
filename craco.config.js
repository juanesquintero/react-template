const path = require('path');
module.exports = {
	webpack: {
		alias: {
			'@src': path.resolve(__dirname, 'src'),
			'@app': path.resolve(__dirname, 'src/app'),
			'@assets': path.resolve(__dirname, 'src/assets'),
		},
	},
};
