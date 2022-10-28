const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const json = require('rollup-plugin-json');

module.exports = {
  input: 'dist/src/main.js',
  output: {
    file: 'dist/src/index.js',
    format: 'cjs',
    strict: false,
    banner: '#! /usr/bin/env node\n',
  },
  plugins: [resolve(), json(), commonjs({include: 'node_modules/**'})],
  external: [
    'child_process',
    'fs',
    'path',
    'os',
    'https',
    'readline',
    'zlib',
    'events',
    'stream',
    'util',
    'buffer',
  ],
};
