"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.palette = exports.mixin = exports.grid = exports.animations = undefined;

var _animations = require("./animations.js");

var allAnimations = _interopRequireWildcard(_animations);

var _grid = require("./grid.js");

var allGrid = _interopRequireWildcard(_grid);

var _mixins = require("./mixins.js");

var allMixin = _interopRequireWildcard(_mixins);

var _palette = require("./palette.js");

var allColors = _interopRequireWildcard(_palette);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key))
          newObj[key] = obj[key];
      }
    }
    newObj.default = obj;
    return newObj;
  }
}

var animations = (exports.animations = allAnimations);
var grid = (exports.grid = allGrid);
var mixin = (exports.mixin = allMixin);
var palette = (exports.palette = allColors);

exports.default = {
  animations: animations,
  grid: grid,
  mixin: mixin,
  palette: palette
};
