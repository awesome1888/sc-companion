const animations = require('./animations.js');
const grid = require('./grid.js');
const mixin = require('./mixins.js');
const palette = require('./palette.js');
const util = require('./util.js');

module.exports = {
    ...util,
    ...animations,
    ...grid,
    ...mixin,
    palette,
};
