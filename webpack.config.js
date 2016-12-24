//-----------------------------------------------------
//	dependencies

const path = require('path');
const fs = require('fs');

const webpack = require('webpack');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

const packageJSON = require('./package.json');

//-----------------------------------------------------
//	set up webpack loaders
var loaders = [
	{
		"test":/\.js$/,
		// "exclude":/(node_modules|bower_components)/,
		"include":[
			path.resolve(__dirname, "src"),
			path.resolve(__dirname, "src-static")
		],
		"loader":"babel",
		"query": {
			"presets": [
				"es2015",
				"stage-0",
				"react"
			],
			"plugins":[
				"transform-runtime"
			]
		}
	},
	{
		"test": /\.css$/, 
		"loader": 'style-loader!css-loader!postcss-loader' 
	},
	{
		"test":/\.scss$/,
		"loader":"style!css!sass!postcss-loader"
	},
	{
		"test": /\.(eot|otf|svg|ttf|woff)$/i,
		"loader":"file"
	},
	{ 
		test: /\.(png|jpg|jpeg|gif|woff)$/, 
		loader: 'url-loader?limit=8192' 
	}
]

//-----------------------------------------------------
//	final export

module.exports = {
	"entry":{
		"app":"./src/index.js"
	},
	"output":{
		"filename":"index.js",
		"path":"./dist/js/",
		"chunkFilename":"bundles/[name]-[id]-[hash].bundle.js",
		"publicPath":"js/"
	},
	"module":{
		"loaders":loaders
	},
	"postcss": function () {
        return [autoprefixer];
    },
    externals:[
    	{
        	"app-config":JSON.stringify({
        		"name":"wonilSuh.com",
        		"namespace":"mainApp",
        		"version":packageJSON.version
        	})
        }
    ],
    "plugins":[
    	new CopyWebpackPlugin([
			{
				"from":path.join(__dirname, "src-static"),
				"to":path.join(__dirname, 'build')
			}
		]),
    	new WebpackBuildNotifierPlugin(),
    	new webpack.optimize.DedupePlugin(),
    	// new webpack.optimize.UglifyJsPlugin(),
    	new webpack.BannerPlugin('wonilSuh.com v24', {
    		raw:false
    	})
    ]
}
