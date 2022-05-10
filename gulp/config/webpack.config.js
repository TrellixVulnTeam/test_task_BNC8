const mode = process.env.NODE_ENV || "development";
// Temporary workaround for 'browserslist' bug that is being patched in the near future
const target = process.env.NODE_ENV === "production" ? "browserslist" : "web";

module.exports = {
  // mode defaults to 'production' if not set
  mode: mode,
  output: {
    filename: 'main.min.js',
},
  // mode: app.isBuild ? 'production' : 'development',

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          // without additional settings, this will reference .babelrc
          loader: "babel-loader",
          options: {
            presets: [
               [
                  '@babel/preset-env',
                  {
                     useBuiltIns: 'usage',
                     corejs: 3.8,
                  }
               ],
            ]
         },
        },
      },
    ],
  },
  
  target: ['es5'],
  devtool: "source-map",

  // required if using webpack-dev-server
  devServer: {
    contentBase: "./dist",
  },
};