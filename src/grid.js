import React from 'react';
import styled from 'styled-components';
import { op } from './util';

const makeConstraint = (width, gutterY, gutterX) => {
    return `
        flex-basis: ${width};
        width: ${width};
        padding-left: ${gutterX};
        padding-right: ${gutterX};
        padding-bottom: ${gutterY};
    `;
};

const makeCell = (theme, props) => {
    let result = '';

    const resolution = theme.resolution;
    const gutterH = theme.gutterHHalf;
    const gutterV = theme.gutterV;

    let first = true;
    theme.bpIx.forEach(bp => {
        const size = bp.key;
        const value = bp.size;
        if (size in props) {
            const width = `${Math.floor((props[size] / resolution) * 1000) *
                0.1}%`;
            result += `
                ${first ? '' : `@media screen and (max-width: ${value}px) {`}
                    ${makeConstraint(width, gutterV, gutterH)}
                ${first ? '' : '};'}
            `;
            first = false;
        }
    });

    if (first) {
        // still the first => no constraints specified, apply the default one
        result += makeConstraint('100%', gutterV, gutterH);
    }

    return result;
};

export const makeGrid = (theme = null) => {
    theme = theme || {};
    theme.resolution = theme.resolution || 12;
    theme.gutterH = theme.gutterH || 0;
    theme.gutterV = theme.gutterV || 0;
    theme.breakpoints = theme.breakpoints || {
        xl: 1200,
        lg: 992,
        md: 768,
        sm: 576,
    };

    theme = Object.assign({}, theme);

    const ix = Object.keys(theme.breakpoints).map(key => ({
        size: theme.breakpoints[key],
        key,
    }));
    ix.sort((a, b) => {
        if (a.size === b.size) {
            return 0;
        }

        return a.size < b.size ? 1 : -1;
    });
    theme.bpIx = ix;

    theme.gutterHHalf = op(theme.gutterH, x => x / 2);
    theme.gutterVHalf = op(theme.gutterV, x => x / 2);

    const gutterHHalfNeg = op(theme.gutterHHalf, x => x * -1);
    const gutterVNeg = op(theme.gutterV, x => x * -1);

    const Grid = styled.div`
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        ${theme.gutterHHalf
            ? `margin-left: ${gutterHHalfNeg}; margin-right: ${gutterHHalfNeg};`
            : ''}
        ${theme.gutterVHalf ? `margin-bottom: ${gutterVNeg};` : ''}
    `;

    const Cell = styled.div`
        ${props => makeCell(theme, props)}
    `;

    return { Grid, Cell };
};

const checkTheme = theme => {
    theme = Object.assign({}, theme || {});
    theme.resolution = theme.resolution || 12;
    theme.breakpoints = theme.breakpoints || {
        xl: 1200,
        lg: 992,
        md: 768,
        sm: 576,
    };

    const ix = Object.keys(theme.breakpoints).map(key => ({
        size: theme.breakpoints[key],
        key,
    }));
    ix.sort((a, b) => {
        if (a.size === b.size) {
            return 0;
        }

        return a.size < b.size ? 1 : -1;
    });
    theme.bpIx = ix;

    return theme;
};

export const grid = (props = {}) => {
    let { config } = props;
    let theme = checkTheme(config);

    let cssSelf = '';
    let cssChildren = '';
    let firstW = true;
    let firstH = true;
    theme.bpIx.forEach(bp => {
        const sizeHName = `gh-${bp.key}`;
        const sizeWName = `gw-${bp.key}`;
        const size = bp.size;
        if (sizeWName in props) {
            const gutter = props[sizeWName];
            const gutterH = op(gutter, x => x / 2);
            const gutterHNeg = op(gutterH, x => x * -1);
            cssSelf += `
                ${firstW ? '' : `@media screen and (max-width: ${size}px) {`}
                    margin-left: ${gutterHNeg};
                    margin-right: ${gutterHNeg};
                ${firstW ? '' : '};'}
            `;
            cssChildren += `
                ${firstW ? '' : `@media screen and (max-width: ${size}px) {`}
                    padding-left: ${gutterH};
                    padding-right: ${gutterH};
                ${firstW ? '' : '};'}
            `;
            firstW = false;
        }
        if (sizeHName in props) {
            const gutter = props[sizeHName];
            const gutterNeg = op(gutter, x => x * -1);
            cssSelf += `
                ${firstH ? '' : `@media screen and (max-width: ${size}px) {`}
                    margin-bottom: ${gutterNeg};
                ${firstH ? '' : '};'}
            `;
            cssChildren += `
                ${firstH ? '' : `@media screen and (max-width: ${size}px) {`}
                    padding-bottom: ${gutter};
                ${firstH ? '' : '};'}
            `;
            firstH = false;
        }
    });

    return `
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        ${cssSelf}
        & > * {
            ${cssChildren}
        }
    `;
};

const makeConstraintMix = width => {
    return `
        flex-basis: ${width};
        width: ${width};
    `;
};

export const cell = (props = {}) => {
    let { config } = props;
    let theme = checkTheme(config);

    let result = '';

    const resolution = theme.resolution;

    let first = true;
    theme.bpIx.forEach(bp => {
        const size = bp.key;
        const value = bp.size;
        if (size in props) {
            const width = `${Math.floor((props[size] / resolution) * 1000) *
                0.1}%`;
            result += `
                ${first ? '' : `@media screen and (max-width: ${value}px) {`}
                    ${makeConstraintMix(width)}
                ${first ? '' : '};'}
            `;
            first = false;
        }
    });

    if (first) {
        // still the first => no constraints specified, apply the default one
        result += makeConstraintMix('100%');
    }

    return result;
};