		const path = require('path');

		module.exports = {
			context: __dirname,
			entry: "./frontend/kilogram.jsx",
			output: {
				path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
				filename: "bundle.js"
			},
			module: {
				rules: [{
						test: [/\.jsx?$/],
						exclude: /(node_modules)/,
						use: {
							loader: 'babel-loader',
							query: {
								presets: ['@babel/env', '@babel/react']
							}
						},
					},
					{
						test: /\.(png|jp(e*)g|svg)$/,
						use: [{
							loader: 'url-loader',
							options: {
								// limit: 8000, // Convert images < 8kb to base64 strings
								name: '[path][hash]-[name].[ext]'
							}
						}]
					}
				]
			},
			devtool: 'source-map',
			resolve: {
				extensions: ['.js', '.jsx', '*']
			}
		};