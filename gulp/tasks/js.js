import webpack from "webpack-stream";

export const js = () => {
    return app.gulp.src(app.path.src.js, {
            sourcemaps: app.isDev
        })
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "JS",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(webpack({
            devtool: "source-map",
            mode: 'development',
            output: {
                filename: 'main.min.js',
            },
            module: {
                rules: [{
                    test: /\.js$/,

                    exclude: /node_modules/,
                    use: {
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
                }, ],
            }
        }))
        .pipe(app.gulp.dest(app.path.build.js))
        .pipe(app.plugins.browsersync.stream())
}