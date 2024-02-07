import gulp from 'gulp';
import browserSync from 'browser-sync';
import GulpPug from 'gulp-pug';
import { deleteAsync } from 'del';
import htmlmin from 'gulp-htmlmin';
import gulpIf from 'gulp-if';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import dotenv from 'dotenv';
import uglify from 'gulp-terser';

dotenv.config();

const config = {
  baseDir: './src',
  outputDir: './docs',
};

const sass = gulpSass(dartSass);

const isProduction = () => {
  return process.env.ENVIRONMENT === 'production';
};

const html = () => {
  return gulp
    .src(`${config.baseDir}/**/*.html`)
    .pipe(gulpIf(isProduction(), htmlmin({ collapseWhitespace: true })))
    .pipe(gulp.dest(config.outputDir))
    .pipe(browserSync.reload({ stream: true }));
};

const pug = () => {
  return gulp
    .src(`${config.baseDir}/**/*.pug`)
    .pipe(GulpPug({ pretty: true }))
    .pipe(gulpIf(isProduction(), htmlmin({ collapseWhitespace: true })))
    .pipe(gulp.dest(config.outputDir))
    .pipe(browserSync.reload({ stream: true }));
};

const scss = () => {
  return gulp
    .src(`${config.baseDir}/scss/**/*.scss`)
    .pipe(sass({ outputStyle: isProduction() ? 'compressed' : 'expanded' }).on('error', sass.logError))
    .pipe(gulp.dest(`${config.outputDir}/css`))
    .pipe(browserSync.reload({ stream: true }));
};

const js = () => {
  return gulp
    .src(`${config.baseDir}/js/**/*.js`)
    .pipe(gulpIf(isProduction(), uglify()))
    .pipe(gulp.dest(`${config.outputDir}/js`))
    .pipe(browserSync.reload({ stream: true }));
};

const assets = () => {
  return gulp
    .src(`${config.baseDir}/assets/**/*`)
    .pipe(gulp.dest(`${config.outputDir}/assets`))
    .pipe(browserSync.reload({ stream: true }));
};

const clean = () => {
  return deleteAsync([config.outputDir]);
};

const autoreload = () => {
  browserSync.init({
    open: false,
    server: {
      baseDir: config.outputDir,
    },
  });
};

const watchers = () => {
  autoreload();

  gulp.watch(`${config.baseDir}/**/*.html`, html);
  gulp.watch(`${config.baseDir}/**/*.pug`, pug);
  gulp.watch(`${config.baseDir}/scss/**/*.scss`, scss);
  gulp.watch(`${config.baseDir}/assets/**/*`, assets);
  gulp.watch(`${config.baseDir}/js/**/*.js`, js);
};

const tasks = {
  clean,
  html,
  pug,
  scss,
  assets,
  js,
  watchers,
};

gulp.task('default', gulp.series(Object.values(tasks)));
