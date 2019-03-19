import React from 'react';
import { ThemeProvider } from 'styled-components';
import { default as SCGrid } from 'styled-components-grid';

export const makeGrid = (theme = null) => {
    theme = theme || {
        resolution: 12,
        breakpoints: {
            xs: 0,
            sm: 576,
            md: 768,
            lg: 992,
            xl: 1200,
        },
    };

    const Grid = ({ children, className }) => (
        <ThemeProvider theme={theme}>
            <SCGrid className={className}>{children}</SCGrid>
        </ThemeProvider>
    );

    const Cell = props => {
        let { children, size, className } = props;
        const base = theme.resolution;

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

    return { Grid, Cell };
};
