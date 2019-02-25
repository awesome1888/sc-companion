const pInt = (val) => {
  let iVal = parseInt(val, 10);
  if (isNaN(iVal)) {
    iVal = 0;
  }

  return iVal;
};

export const op = (val, fn) => {
  if (typeof val === 'undefined') {
    return val;
  }

  const f = val.toString().trim().match(/^(\d+)?(.(\d+))?(px|rem|em)?$/i);
  if (f.length) {
    const full = pInt(f[1]);
    const frac = pInt(f[3]);
    const unit = f[4] || '';

    return `${fn(full + +`0.${frac}`)}${unit}`;
  }

  return val;
};

export const absoluteCover = () => {
  return `
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  `;
};

export const flex = () => {
  return `
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
  `;
};

export const flexGrow = (amount = 1) => {
  return `
    flex-grow: ${amount};
    -webkit-flex-grow: ${amount};
  `;
};

export const flexDirection = (way = 'row') => {
  way = way === 'column' ? 'column' : 'row';
  return `
    flex-direction: ${way};
    -ms-flex-direction: ${way};
  `;
};

/**
 *
 * @param how {string} space-between|start|end|center
 * @returns {string}
 */
export const flexJustifyContent = (how = 'space-between') => {
  if (how === 'start' || how === 'end') {
    how = `flex-${how}`;
  }
  return `
    -webkit-justify-content: ${how};
    justify-content: ${how};
  `;
};

/**
 *
 * @param how {string} baseline|start|end|center|stretch
 * @returns {string}
 */
export const flexAlignItems = (how = 'baseline') => {
  let newNow = how;
  if (how === 'start' || how === 'end') {
    newNow = `flex-${how}`;
  }
  if (how === 'central') {
    how = 'center';
  }
  return `
    -webkit-box-align: ${how};
    -webkit-align-items: ${newNow};
    -ms-flex-align: ${how};
    align-items: ${newNow};
  `;
};

export const flexWrap = () => {
  return `
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  `;
};

export const flexNoShrink = () => {
  return `
    flex-shrink: 0;
  `;
};

export const align = (params = {}, maybeY = null) => {
  params = params || {};
  let { x, y } = params;
  if (typeof params === 'string') {
    x = params;
  }
  if (typeof maybeY === 'string') {
    y = maybeY;
  }

  return `
    ${flex()}
    ${x !== null && flexJustifyContent(x)}
    ${y !== null && flexAlignItems(y)}
    ${flexDirection('row')}
  `;
};

export const round = () => {
  return `
    border-radius: 99999rem;
  `;
};

export const rectangle = (params = {}) => {
  let { x, y, k } = params;
  if (typeof y === 'undefined') {
    y = x;
  }

  if (typeof k !== 'undefined') {
    x = op(x, v => v * k);
    y = op(y, v => v * k);
  }

  return `
    width: ${x};
    height: ${y};
  `;
}

export const group = (w = 0, h = 0) => {
  const negW = op(w, v => -1 * v);
  const negH = op(h, v => -1 * v);
  return `
    & > * {
      margin-bottom: ${h};
      margin-right: ${w};
    }

    margin-bottom: ${negH};
    margin-right: ${negW};
  `;
}

export const central = (maxWidth = '960px') => {
  return `
    margin-left: auto;
    margin-right: auto;
    max-width: ${maxWidth};
  `;
};

export const disabled = () => {
  return `
    cursor: not-allowed;
    pointer-events: none;
  `;
};

export const fontMaterialIcons = () => {
  return `
    @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
  `;
};

export const icon = (code = '', size = 'inherit', offset = 0) => {
  return `
    height: ${size};
	  width: ${size};
	  font-size: ${size};
	  box-sizing: content-box;

    padding: ${offset};
    ::before {
      content: '${code}';
    }

    ${fontMaterialIcons()}
    font-family: Material Icons, sans-serif;
  `;
};

export const mirror = (params = {}) => {
  const { way } = params;
  return `
    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    filter: FlipH;
    -ms-filter: "FlipH";
  `;
};


export const fontReset = () => {
  return `
    font-style: normal;
    letter-spacing: normal;
    direction: ltr;
    -webkit-font-feature-settings: 'liga';
    -webkit-font-smoothing: antialiased;
  `;
};

export const iconLabel = (code = 'help', size = 'inherit', iconVAlignment = 'baseline', iconHAlignment = 0, iconWidth = 'auto', distance = 0) => {


  return `
    ${flex()}
    ${iconVAlignment === 'baseline' ? flexAlignItems('baseline') : ''} 

    ::before {
      content: '${code}';
      flex-shrink: 0;
      padding-right: ${distance};
      ${fontMaterialIcons()}
      font-family: Material Icons, sans-serif;
      ${fontReset()}
      font-size: ${size};
      text-align: center;
      width: ${iconWidth};
  
      ${iconVAlignment !== 'baseline' ? `margin-top: ${iconVAlignment}` : ''}
      ${iconHAlignment !== 'baseline' ? `margin-bottom: ${iconHAlignment}` : ''}
    }
  `;
};

export const ellipsis = () => {
  return `
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow-x: hidden;
  `;
};

export const backgroundCover = (props = {}) => {
  let { image } = props;
  if (typeof props === 'string') {
    image = props;
  }

  return `
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: scroll;
    
    ${image ? `background-image: url(${image});` : ''}  
  `;
};

export const helvetica = () => {
  return `
    font-family: Helvetica, sans-serif;
  `;
};

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
