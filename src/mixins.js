/**
 * Converts a numeric value into int
 * @param val
 * @returns {number}
 */
const pInt = val => {
    let iVal = parseInt(val, 10);
    if (isNaN(iVal)) {
        iVal = 0;
    }

    return iVal;
};

/**
 * Performs an operation on val by applying a function
 * @param val
 * @param fn
 * @returns {*}
 */
export const op = (val, fn) => {
    if (typeof val === 'undefined') {
        return val;
    }

    const f = val
        .toString()
        .trim()
        .match(/^(\d+)?(.(\d+))?(px|rem|em)?$/i);
    if (f.length) {
        const full = pInt(f[1]);
        const frac = pInt(f[3]);
        const unit = f[4] || '';

        return `${fn(full + +`0.${frac}`)}${unit}`;
    }

    return val;
};

const j = how => {
    if (how === 'start' || how === 'left' || how === 'top') {
        return 'flex-start';
    }
    if (how === 'end' || how === 'right' || how === 'bottom') {
        return 'flex-end';
    }
    if (how === 'middle') {
        return 'center';
    }
    return how;
};

export const align = (...args) => {
    const $ = (y = null, x = null, direction = 'row') => {
        console.dir(direction);
        x = j(x);
        y = j(y);
        if (direction === 'column' || direction === 'col') {
            return `
                display: flex;
                flex-direction: column;
                ${y !== null && `justify-content: ${y}`}
                ${x !== null && `align-items: ${x}`}
            `;
        } else {
            return `
                display: flex;
                flex-direction: row;
                ${x !== null && `justify-content: ${x}`}
                ${y !== null && `align-items: ${y}`}
            `;
        }
    };

    if (
        typeof args[0] !== 'undefined' &&
        typeof args[0] !== 'string' &&
        args.length === 1
    ) {
        const { y, x, direction } = args[0];
        return $(y, x, direction);
    } else {
        return $(...args);
    }
};

export const flexJustifySelf = (...args) => {
    const $ = (alignment = 'start', direction = 'row') => {
        return `
          margin: 0 auto;
        `;
    };

    if (args[0] && typeof args[0] !== 'string') {
        let { alignment, direction } = args[0];
        return $(alignment, direction);
    } else {
        return $(...args);
    }
};

export const round = () => {
    return `
      border-radius: 99999rem;
    `;
};

export const rectangle = (...args) => {
    const $ = (width, height = null, k = null) => {
        if (height === null) {
            height = width;
        }

        if (typeof k !== 'undefined') {
            width = op(width, v => v * k);
            height = op(height, v => v * k);
        }

        return `
          width: ${width};
          height: ${height};
        `;
    };

    if (args[0] && typeof args[0] !== 'string') {
        let { width, height, k } = args[0];
        return $(width, height, k);
    } else {
        return $(...args);
    }
};

export const group = (params = {}) => {
    let { x, y } = params;
    if (typeof x === 'undefined') {
        x = 0;
    }
    if (typeof y === 'undefined') {
        y = 0;
    }

    const negY = op(y, v => -1 * v);
    const negX = op(x, v => -1 * v);
    return `
    & > * {
      margin-bottom: ${y};
      margin-right: ${x};
    }

    margin-bottom: ${negY};
    margin-right: ${negX};
  `;
};

export const central = (params = {}) => {
    let { maxWidth } = params;
    maxWidth = maxWidth || '960px';
    return `
    margin-left: auto;
    margin-right: auto;
    max-width: ${maxWidth};
  `;
};

export const centralColumn = (props = {}) => {
    let { gutter } = props;
    if (typeof gutter === 'undefined') {
        gutter = '1rem';
    }
    return `
    ${central(props)}
    min-width: 320px;
    height: 100vh;
    ${gutter ? `padding-left: ${gutter}; padding-right: ${gutter}` : ''}
    box-sizing: border-box;
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

export const icon = (params = {}) => {
    let { code, size, offset } = params;
    code = code || '';
    size = size || 'inherit';
    offset = offset || 0;

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

export const iconLabel = (props = {}) => {
    let {
        code,
        size,
        iconVAlignment,
        iconHAlignment,
        iconWidth,
        distance,
    } = props;
    code = code || 'help';
    size = size || 'inherit';
    iconVAlignment = iconVAlignment || 'baseline';
    iconHAlignment = iconHAlignment || 0;
    iconWidth = iconWidth || 'auto';
    distance = distance || 0;

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

export const fgColor = (props = {}) => {
    let { color, hoverColor, transitionTime } = props;
    color = color || 'inherit';
    hoverColor = hoverColor || null;
    transitionTime = transitionTime || 0;

    return `
    color: ${color};
    ${
        color !== hoverColor
            ? `
          &:hover {
            color: ${hoverColor};
          }
        `
            : ''
    }
    
    ${transition('color', transitionTime)}
  `;
};

export const bgColor = (props = {}) => {
    let { color, hoverColor, focusColor, transitionTime } = props;
    color = color || 'inherit';
    transitionTime = transitionTime || 0;

    return `
      background-color: ${color};
      &:hover {
        background-color: ${hoverColor ? hoverColor : color};
      }
      &:focus {
        background-color: ${focusColor ? focusColor : color};
      }
      
      ${transition('border-color', transitionTime)}
    `;
};

export const dashedUnderline = (props = {}) => {
    let { mode, thickness, color, transitionTime } = props;
    color = color || 'currentcolor';
    mode = mode || 'hover';
    transitionTime = transitionTime || 0;

    return `
    ${
        mode === 'hover'
            ? `
          border: 0 none;
          border-bottom: ${thickness} dashed transparent;
          &:hover {
            border-bottom: ${thickness} dashed ${color};
          }
        `
            : ''
    }
  
    ${transition('border-color', transitionTime)}
  `;
};

export const heightTrick = (props = {}) => {
    let { w } = props;
    w = w || '100%';

    return `
    position: relative;
    width: ${w};
  
    &:before {
      content: "";
      display: block;
      padding-top: 100%;
    }

    > * {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }
  `;
};

export const fixed = (props = {}) => {
    let { align } = props;

    return `
    position: fixed;
    ${
        align === 'cover'
            ? `
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    `
            : ''
    }
  `;
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
