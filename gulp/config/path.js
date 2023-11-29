import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const buildAssetsFolder = './dist/assets';
const srcFolder = './src';
const srcAssetsFolder = './src/assets';

export const path = {
  build: {
    js: `${buildFolder}/js/`,
    css: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    files: `${buildAssetsFolder}/files/`,
    fonts: `${buildAssetsFolder}/fonts/`,
    images: `${buildAssetsFolder}/img/`,
  },
  src: {
    images: `${srcAssetsFolder}/img/**/*.{jpg, jpeg,png,gif,webp}`,
    js: `${srcFolder}/js/app.js`,
    svg: `${srcAssetsFolder}/img/**/*.svg`,
    scss: `${srcFolder}/scss/style.scss`,
    html: `${srcFolder}/*.html`,
    files: `${srcFolder}/files/**/*.*`,
    svgicons: `${srcAssetsFolder}/svgicons/*.svg`,
  },
  watch: {
    js: `${srcFolder}/js/**/*.js`,
    images: `${srcAssetsFolder}/img/**/*.{jpg, jpeg,png,gif,svg,webp}`,
    scss: `${srcFolder}/scss/**/*.scss`,
    html: `${srcFolder}/**/*.html`,
    files: `${srcFolder}/files/**/*.*`,
  },
  clean: buildFolder,
  srcFolder: srcFolder,
  buildFolder: buildFolder,
  srcAssetsFolder: srcAssetsFolder,
  rootFolder: rootFolder,
  ftp: ``,
};
