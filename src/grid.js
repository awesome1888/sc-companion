import React from 'react';
import { ThemeProvider } from 'styled-components';
import { default as SCGrid } from 'styled-components-grid';

export const Cell = (props) => {
    let { children, size, className, base } = props;
    if (!base) {
        base = 12;
    }

    if (!size) {
        size = {};
        ['xs', 'sm', 'md', 'lg', 'xl'].forEach(bp => {
            if (typeof props[bp] !== 'undefined') {
                size[bp] = props[bp] / base;
            }
        });
    }

    return (
        <SCGrid.Unit size={size} className={className}>
            {children}
        </SCGrid.Unit>
    );
};

export default (withTheme = null) => {
    const gridFn = ({ theme, children, className }) => (
        <ThemeProvider theme={theme}>
            <SCGrid className={className}>
                { children}
            </SCGrid>
        </ThemeProvider>
    );

    const Grid = withTheme ? withTheme(gridFn) : gridFn;
    Grid.Cell = Cell;

    return Grid;
};
