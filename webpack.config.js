var path = require("path");

module.exports = {
	mode: "development",
	entry: "./main.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "static")
	},
	module: {
        rules: [{
            test: /\.scss$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"
            ]
        },
		{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: "babel-loader",
				options: {
					presets: ["babel-preset-env"]
				}
			}
		}]
	},
	devServer: {
		port: 80,
		contentBase: "./static"
	}
};
