const animations = require('./animations.js');
const grid = require('./grid.js');
const mixin = require('./mixins.js');
const palette = require('./palette.js');

module.exports = {
    ...animations,
    ...grid,
    ...mixin,
    palette,
};
