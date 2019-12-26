let mix = require("laravel-mix");
mix.options({
    postCss: [require("autoprefixer")]
})
if (!mix.inProduction()) {
    mix.webpackConfig({
        devtool: 'inline-source-map'
    })

    // mix.bundleAnalyzer();
}

mix.js("src/js/index.js", "dist/bundle.js")
    .sass("src/scss/main.scss", "dist/bundle.css")
    .copy("src/fonts","dist/fonts")
    .options({
        processCssUrls: false,
        autoprefixer: {
            options: {
                browsers: [
                    "last 6 versions",
                    "ie 10-11",
                    "last 4 Edge versions"
                ],
                grid: true,
                flex: true
            }
        }
    })
    .sourceMaps(false, "source-map")
    .browserSync({
        proxy: "landing.local",
        files:["src/**/*"]
    });

