const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");
const withSass = require("@zeit/next-sass");

module.exports = withSass({
  webpack: (config) => {
    config.plugins.push(
      new SWPrecacheWebpackPlugin({
        minify: true,
        staticFileGlobsIgnorePatterns: [/\.next\//],
        runtimeCaching: [
          {
            handler: "networkFirst",
            urlPattern: /^https?.*/,
          },
        ],
      })
    );

    return config;
  },
});
