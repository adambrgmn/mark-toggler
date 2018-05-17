/* eslint-disable */

const babelOpts = require('../.babelrc');
module.exports = require('babel-jest').createTransformer(babelOpts);
