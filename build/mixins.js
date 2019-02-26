"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var pInt = function pInt(val) {
  var iVal = parseInt(val, 10);
  if (isNaN(iVal)) {
    iVal = 0;
  }

  return iVal;
};

var op = (exports.op = function op(val, fn) {
  if (typeof val === "undefined") {
    return val;
  }

  var f = val
    .toString()
    .trim()
    .match(/^(\d+)?(.(\d+))?(px|rem|em)?$/i);
  if (f.length) {
    var full = pInt(f[1]);
    var frac = pInt(f[3]);
    var unit = f[4] || "";

    return "" + fn(full + +("0." + frac)) + unit;
  }

  return val;
});

var absoluteCover = (exports.absoluteCover = function absoluteCover() {
  return "\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n  ";
});

var flex = (exports.flex = function flex() {
  return "\n    display: -webkit-box;\n    display: -moz-box;\n    display: -ms-flexbox;\n    display: -webkit-flex;\n    display: flex;\n  ";
});

var flexGrow = (exports.flexGrow = function flexGrow() {
  var amount =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

  return (
    "\n    flex-grow: " +
    amount +
    ";\n    -webkit-flex-grow: " +
    amount +
    ";\n  "
  );
});

var flexDirection = (exports.flexDirection = function flexDirection() {
  var way =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "row";

  way = way === "column" ? "column" : "row";
  return (
    "\n    flex-direction: " +
    way +
    ";\n    -ms-flex-direction: " +
    way +
    ";\n  "
  );
});

/**
 *
 * @param how {string} space-between|start|end|center
 * @returns {string}
 */
var flexJustifyContent = (exports.flexJustifyContent = function flexJustifyContent() {
  var how =
    arguments.length > 0 && arguments[0] !== undefined
      ? arguments[0]
      : "space-between";

  if (how === "start" || how === "end") {
    how = "flex-" + how;
  }
  return (
    "\n    -webkit-justify-content: " +
    how +
    ";\n    justify-content: " +
    how +
    ";\n  "
  );
});

/**
 *
 * @param how {string} baseline|start|end|center|stretch
 * @returns {string}
 */
var flexAlignItems = (exports.flexAlignItems = function flexAlignItems() {
  var how =
    arguments.length > 0 && arguments[0] !== undefined
      ? arguments[0]
      : "baseline";

  var newNow = how;
  if (how === "start" || how === "end") {
    newNow = "flex-" + how;
  }
  if (how === "central") {
    how = "center";
  }
  return (
    "\n    -webkit-box-align: " +
    how +
    ";\n    -webkit-align-items: " +
    newNow +
    ";\n    -ms-flex-align: " +
    how +
    ";\n    align-items: " +
    newNow +
    ";\n  "
  );
});

var flexWrap = (exports.flexWrap = function flexWrap() {
  return "\n    -webkit-flex-wrap: wrap;\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap;\n  ";
});

var flexNoShrink = (exports.flexNoShrink = function flexNoShrink() {
  return "\n    flex-shrink: 0;\n  ";
});

var align = (exports.align = function align() {
  var params =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var maybeY =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  params = params || {};
  var _params = params,
    x = _params.x,
    y = _params.y;

  if (typeof params === "string") {
    x = params;
  }
  if (typeof maybeY === "string") {
    y = maybeY;
  }

  return (
    "\n    " +
    flex() +
    "\n    " +
    (x !== null && flexJustifyContent(x)) +
    "\n    " +
    (y !== null && flexAlignItems(y)) +
    "\n    " +
    flexDirection("row") +
    "\n  "
  );
});

var round = (exports.round = function round() {
  return "\n    border-radius: 99999rem;\n  ";
});

var rectangle = (exports.rectangle = function rectangle() {
  var params =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var x = params.x,
    y = params.y,
    k = params.k;

  if (typeof y === "undefined") {
    y = x;
  }

  if (typeof k !== "undefined") {
    x = op(x, function(v) {
      return v * k;
    });
    y = op(y, function(v) {
      return v * k;
    });
  }

  return "\n    width: " + x + ";\n    height: " + y + ";\n  ";
});

var group = (exports.group = function group() {
  var w = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var h = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var negW = op(w, function(v) {
    return -1 * v;
  });
  var negH = op(h, function(v) {
    return -1 * v;
  });
  return (
    "\n    & > * {\n      margin-bottom: " +
    h +
    ";\n      margin-right: " +
    w +
    ";\n    }\n\n    margin-bottom: " +
    negH +
    ";\n    margin-right: " +
    negW +
    ";\n  "
  );
});

var central = (exports.central = function central() {
  var maxWidth =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "960px";

  return (
    "\n    margin-left: auto;\n    margin-right: auto;\n    max-width: " +
    maxWidth +
    ";\n  "
  );
});

var disabled = (exports.disabled = function disabled() {
  return "\n    cursor: not-allowed;\n    pointer-events: none;\n  ";
});

var fontMaterialIcons = (exports.fontMaterialIcons = function fontMaterialIcons() {
  return "\n    @import url('https://fonts.googleapis.com/icon?family=Material+Icons');\n  ";
});

var icon = (exports.icon = function icon() {
  var code =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var size =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : "inherit";
  var offset =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  return (
    "\n    height: " +
    size +
    ";\n\t  width: " +
    size +
    ";\n\t  font-size: " +
    size +
    ";\n\t  box-sizing: content-box;\n\n    padding: " +
    offset +
    ";\n    ::before {\n      content: '" +
    code +
    "';\n    }\n\n    " +
    fontMaterialIcons() +
    "\n    font-family: Material Icons, sans-serif;\n  "
  );
});

var mirror = (exports.mirror = function mirror() {
  var params =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var way = params.way;

  return '\n    -moz-transform: scaleX(-1);\n    -o-transform: scaleX(-1);\n    -webkit-transform: scaleX(-1);\n    transform: scaleX(-1);\n    filter: FlipH;\n    -ms-filter: "FlipH";\n  ';
});

var fontReset = (exports.fontReset = function fontReset() {
  return "\n    font-style: normal;\n    letter-spacing: normal;\n    direction: ltr;\n    -webkit-font-feature-settings: 'liga';\n    -webkit-font-smoothing: antialiased;\n  ";
});

var iconLabel = (exports.iconLabel = function iconLabel() {
  var code =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "help";
  var size =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : "inherit";
  var iconVAlignment =
    arguments.length > 2 && arguments[2] !== undefined
      ? arguments[2]
      : "baseline";
  var iconHAlignment =
    arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var iconWidth =
    arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "auto";
  var distance =
    arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  return (
    "\n    " +
    flex() +
    "\n    " +
    (iconVAlignment === "baseline" ? flexAlignItems("baseline") : "") +
    " \n\n    ::before {\n      content: '" +
    code +
    "';\n      flex-shrink: 0;\n      padding-right: " +
    distance +
    ";\n      " +
    fontMaterialIcons() +
    "\n      font-family: Material Icons, sans-serif;\n      " +
    fontReset() +
    "\n      font-size: " +
    size +
    ";\n      text-align: center;\n      width: " +
    iconWidth +
    ";\n  \n      " +
    (iconVAlignment !== "baseline" ? "margin-top: " + iconVAlignment : "") +
    "\n      " +
    (iconHAlignment !== "baseline" ? "margin-bottom: " + iconHAlignment : "") +
    "\n    }\n  "
  );
});

var ellipsis = (exports.ellipsis = function ellipsis() {
  return "\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow-x: hidden;\n  ";
});

var backgroundCover = (exports.backgroundCover = function backgroundCover() {
  var props =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var image = props.image;

  if (typeof props === "string") {
    image = props;
  }

  return (
    "\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-attachment: scroll;\n    \n    " +
    (image ? "background-image: url(" + image + ");" : "") +
    "  \n  "
  );
});

var helvetica = (exports.helvetica = function helvetica() {
  return "\n    font-family: Helvetica, sans-serif;\n  ";
});

// export const fColor = (color = 'inherit', hColor = null, transitionTime = 0) => {
//   return `
//     color: ${color};
//     &:focus, &:active {
//       color: $color;
//     }
//
//
//   `;
// };
//
// @mixin rb-color($color: inherit, $h-color: $color, $transition-time: 0) {
//   color: $color;
//
//
// @if $h-color != $color {
//   &:hover {
//       color: $h-color;
//     }
//   } @else {
//     color: $color;
//   }
//
// @if $transition-time > 0 {
//   @include rb-transition(color, $transition-time);
//   }
// }
//
// @mixin rb-dashed-underline($mode: hover, $thickness: 1px, $color: currentcolor, $transition-time: 0) {
// @if $mode == hover {
//     border: 0 none;
//     border-bottom: $thickness dashed transparent;
//   &:hover {
//       border-bottom: $thickness dashed $color;
//     }
//   }
//
// @if $transition-time > 0 {
//   @include rb-transition(border-color, $transition-time);
//   }
// }

// @mixin rb-bg-color($color: inherit, $h-color: false, $f-color: false, $transition-time: 0) {
//   background-color: $color;
//
//   /* specify the color for hover, or use the main one */
// @if $h-color != false {
//   &:hover {
//       background-color: $h-color;
//     }
//   } @else {
//   &:hover {
//       background-color: $color;
//     }
//   }
//
//   /* specify the color for focus, or use the main one */
// @if $f-color != false {
//   &:focus {
//       background-color: $h-color;
//     }
//   } @else {
//   &:focus {
//       background-color: $color;
//     }
//   }
//
// @if $transition-time > 0 {
//   @include rb-transition(background-color, $transition-time);
//   }
// }

// @mixin rb-height-trick($width: 100%) {
//   position: relative;
//   width: $width;
//
// &:before {
//     content: "";
//     display: block;
//     padding-top: 100%;
//   }
//
// > * {
//     position: absolute;
//     top: 0;
//     left: 0;
//     bottom: 0;
//     right: 0;
//   }
// }

// @mixin rb-fixed($alignment) {
//   position: fixed;
// @if ($alignment == 'cover') {
//     top: 0;
//     bottom: 0;
//     left: 0;
//     right: 0;
//   }
// }

// @mixin rb-transition($what: all, $duration: 200ms) {
//   transition: $what $duration ease;
//   -webkit-transition: $what $duration ease;
// }
