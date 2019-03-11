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

const trans = (what, duration) => {
    if (duration <= 0) {
        return '';
    }
    return `transition: ${what} ${duration} ease`;
};

const fontMaterialIcons = () => {
    return `
    @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
  `;
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

// export const flexJustifySelf = (...args) => {
//     const $ = (alignment = 'start', direction = 'row') => {
//         return `
//       margin: 0 auto;
//     `;
//     };
//
//     if (args[0] && typeof args[0] !== 'string') {
//         let { alignment, direction } = args[0];
//         return $(alignment, direction);
//     } else {
//         return $(...args);
//     }
// };

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

export const group = (...args) => {
    const $ = (hOffs = null, wOffs = null) => {
        return `
            & > * {
                ${hOffs !== null && `margin-bottom: ${hOffs}`};
                ${wOffs !== null && `margin-right: ${wOffs}`}
            }
        
            ${hOffs !== null && `margin-bottom: ${op(hOffs, v => -1 * v)}`}
            ${wOffs !== null && `margin-right: ${op(wOffs, v => -1 * v)}`}
        `;
    };

    if (args[0] && typeof args[0] !== 'string') {
        let { hOffs, wOffs } = args[0];
        return $(hOffs, wOffs);
    } else {
        return $(...args);
    }
};

export const central = (...args) => {
    const $ = (maxWidth = '960px') => {
        return `
            margin-left: auto;
            margin-right: auto;
            max-width: ${maxWidth};
        `;
    };

    if (args[0] && typeof args[0] !== 'string') {
        let { maxWidth } = args[0];
        return $(maxWidth);
    } else {
        return $(...args);
    }
};

export const centralColumn = (...args) => {
    const $ = (maxWidth = '960px', gutter = '1rem') => {
        return `
            ${central(...args)}
            min-width: 320px;
            height: 100vh;
            ${gutter ? `padding-left: ${gutter}; padding-right: ${gutter}` : ''}
            box-sizing: border-box;
        `;
    };

    if (args[0] && typeof args[0] !== 'string') {
        let { maxWidth, gutter } = args[0];
        return $(maxWidth, gutter);
    } else {
        return $(...args);
    }
};

export const disabled = () => {
    return `
    cursor: not-allowed;
    pointer-events: none;
  `;
};

export const icon = (...args) => {
    const $ = (code = 'help', size = 'inherit', offset = 0) => {
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

    if (args[0] && typeof args[0] !== 'string') {
        let { code, size, offset } = args[0];
        return $(code, size, offset);
    } else {
        return $(...args);
    }
};

export const mirror = () => {
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

export const iconLabel = (...args) => {
    const $ = (
        code = 'help',
        size = 'inherit',
        iconVAlignment = 'baseline',
        iconHAlignment = 0,
        iconWidth = 'auto',
        distance = 0,
    ) => {
        return `
            display: flex;        
            ${iconVAlignment === 'baseline' ? 'align-items: baseline' : ''} 
        
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
          
              ${
                  iconVAlignment !== 'baseline'
                      ? `margin-top: ${iconVAlignment}`
                      : ''
              }
              ${
                  iconHAlignment !== 'baseline'
                      ? `margin-bottom: ${iconHAlignment}`
                      : ''
              }
            }
        `;
    };

    if (args[0] && typeof args[0] !== 'string') {
        let {
            code,
            size,
            iconVAlignment,
            iconHAlignment,
            iconWidth,
            distance,
        } = args[0];
        return $(
            code,
            size,
            iconVAlignment,
            iconHAlignment,
            iconWidth,
            distance,
        );
    } else {
        return $(...args);
    }
};

export const ellipsis = () => {
    return `
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow-x: hidden;
    `;
};

export const backgroundCover = (...args) => {
    const $ = (image = null) => {
        return `
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            background-attachment: scroll;
            
            ${image ? `background-image: url(${image});` : ''}
        `;
    };

    if (args[0] && typeof args[0] !== 'string') {
        let { image } = args[0];
        return $(image);
    } else {
        return $(...args);
    }
};

export const helvetica = () => {
    return `
    font-family: Helvetica, sans-serif;
  `;
};

export const fgColor = (...args) => {
    const $ = (color = 'inherit', hoverColor = null, transitionTime = 0) => {
        return `
            color: ${color};
            ${color !== hoverColor && `&:hover { color: ${hoverColor} }`}
            ${trans('color', transitionTime)}
        `;
    };

    if (args[0] && typeof args[0] !== 'string') {
        let { color, hoverColor, transitionTime } = args[0];
        return $(color, hoverColor, transitionTime);
    } else {
        return $(...args);
    }
};

export const bgColor = (...args) => {
    const $ = (
        color = 'inherit',
        hoverColor = null,
        focusColor = null,
        transitionTime = 0,
    ) => {
        return `
            background-color: ${color};
            &:hover {
              background-color: ${hoverColor ? hoverColor : color};
            }
            &:focus {
              background-color: ${focusColor ? focusColor : color};
            }
            
            ${trans('border-color', transitionTime)}
        `;
    };

    if (args[0] && typeof args[0] !== 'string') {
        let { color, hoverColor, focusColor, transitionTime } = args[0];
        return $(color, hoverColor, focusColor, transitionTime);
    } else {
        return $(...args);
    }
};

export const dashedUnderline = (...args) => {
    const $ = (
        mode = 'hover',
        thickness = '1px',
        color = 'currentcolor',
        transitionTime = 0,
    ) => {
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

            ${trans('border-color', transitionTime)}
        `;
    };

    if (args[0] && typeof args[0] !== 'string') {
        let { mode, thickness, color, transitionTime } = args[0];
        return $(mode, thickness, color, transitionTime);
    } else {
        return $(...args);
    }
};

export const heightTrick = () => {
    return `
        position: relative;
        width: 100%;
      
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

export const fixedCover = () => {
    return `
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
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
