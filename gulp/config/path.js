import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';
const assetsFolder = './src/assets';

export const path = {
  build: {
    js: `${buildFolder}/js/`,
    css: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    files: `${buildFolder}/files/`,
    fonts: `${buildFolder}/fonts/`,
    images: `${buildFolder}/img/`,
  },
  src: {
    images: `${assetsFolder}/img/**/*.{jpg, jpeg,png,gif,webp}`,
    js: `${srcFolder}/js/app.js`,
    svg: `${assetsFolder}/img/**/*.svg`,
    scss: `${srcFolder}/scss/style.scss`,
    html: `${srcFolder}/*.html`,
    files: `${srcFolder}/files/**/*.*`,
    svgicons: `${assetsFolder}/svgicons/*.svg`,
  },
  watch: {
    js: `${srcFolder}/js/**/*.js`,
    images: `${assetsFolder}/img/**/*.{jpg, jpeg,png,gif,svg,webp}`,
    scss: `${srcFolder}/scss/**/*.scss`,
    html: `${srcFolder}/**/*.html`,
    files: `${srcFolder}/files/**/*.*`,
  },
  clean: buildFolder,
  srcFolder: srcFolder,
  buildFolder: buildFolder,
  assetsFolder: assetsFolder,
  rootFolder: rootFolder,
  ftp: ``,
};
