var path = require("path");

module.exports = {
	mode: "development",
	entry: "./main.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname)
	},
	module: {
        rules: [{
            test: /\.scss$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"
            ]
        }]
    },
	devServer: {
		port: 80
	}
};
