const withPlugins = require('next-compose-plugins');
const sass = require('@zeit/next-sass');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
  [
    optimizedImages, {
      inlineImageLimit: 8192,
      imagesFolder: 'images',
      imagesName: '[name]-[hash].[ext]',
      optimizeImagesInDev: false,
      mozjpeg: {
        quality: 80,
      },
      optipng: {
        optimizationLevel: 3,
      },
      pngquant: false,
      gifsicle: {
        interlaced: true,
        optimizationLevel: 3,
      },
      svgo: {
      // enable/disable svgo plugins here
      },
      webp: {
        preset: 'default',
        quality: 75,
      },
    }],
  [
    sass, {
      cssModules: true,
      cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: '[local]___[hash:base64:5]',
      },
    }],
],
{
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    console.log(config);
    return config;
  },
  useFileSystemPublicRoutes: false,
});
