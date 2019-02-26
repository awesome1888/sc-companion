"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cell = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponentsGrid = require("styled-components-grid");

var _styledComponentsGrid2 = _interopRequireDefault(_styledComponentsGrid);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Cell = (exports.Cell = function Cell(props) {
  var children = props.children,
    size = props.size,
    className = props.className,
    base = props.base;

  if (!base) {
    base = 12;
  }

  if (!size) {
    size = {};
    ["xs", "sm", "md", "lg", "xl"].forEach(function(bp) {
      if (typeof props[bp] !== "undefined") {
        size[bp] = props[bp] / base;
      }
    });
  }

  return _react2.default.createElement(
    _styledComponentsGrid2.default.Unit,
    { size: size, className: className },
    children
  );
});

exports.default = function() {
  var withTheme =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  var gridFn = function gridFn(_ref) {
    var theme = _ref.theme,
      children = _ref.children,
      className = _ref.className;
    return _react2.default.createElement(
      _styledComponents.ThemeProvider,
      { theme: theme },
      _react2.default.createElement(
        _styledComponentsGrid2.default,
        { className: className },
        children
      )
    );
  };

  var Grid = withTheme ? withTheme(gridFn) : gridFn;
  Grid.Cell = Cell;

  return Grid;
};
