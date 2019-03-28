import React from "react"
import { Link } from "gatsby"
import { Light as SyntaxHL } from "react-syntax-highlighter"
//import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter/prism-light";

import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript"
import bash from "react-syntax-highlighter/dist/esm/languages/hljs/bash"
// import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs"
import prism from "react-syntax-highlighter/dist/esm/styles/prism/prism"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import * as S from "../components/aux-style.js"

SyntaxHL.registerLanguage("javascript", js)
SyntaxHL.registerLanguage("bash", bash)
// SyntaxHLPrism.registerLanguage('jsx', jsx);

const IndexPage = () => (
  <Layout>
    <SEO
      title="Welcome"
      keywords={[`sc-companion`, `styled-components`, `react`]}
    />
    <h1>Wppphat?</h1>
    <p>
      Yes, another library, that provides a set of mixins I frequently utilise
      when making my Styled-Components-based frontend. Thre are also some CSS
      tricks I have managed to dig up in places like Stackoverflow during my
      career.
      <br /> Enjoy if you like.
    </p>

    <h2>Usage</h2>

    <p>Install the library</p>

    <SyntaxHL language="bash" style={docco}>
      {"npm install sc-companion"}
    </SyntaxHL>

    <p>And then import</p>

    <SyntaxHL language="javascript" style={docco}>
      {'import { align } from "sc-companion" '}
    </SyntaxHL>

    <h2>A brief intro to the available mixins</h2>

    <h3>align()</h3>
    <p>Uses flexbox to produce aligned containers.</p>
    <ul>
      <li>
        The first argument is the vertical orientation, could be{" "}
        <code>top|center|bottom</code>
      </li>
      <li>
        The second one is the horizontal orientation, could be{" "}
        <code>left|center|right</code>
      </li>
      <li>
        The third one is the orientation of the content, could be{" "}
        <code>row|column</code>
      </li>
    </ul>

    <p>Example:</p>

    <SyntaxHL language="javascript" style={docco}>
      {`export const Aligner = styled.div\`
  \${align('center', 'center', 'column')}
\`;`}
    </SyntaxHL>

    <p>Will produce this kind of layout:</p>
    <p>
      <S.ColumnCenterCenter>
        <S.Coins />
      </S.ColumnCenterCenter>
    </p>

    <p>All possible combinations are the following:</p>
    <p>
      <S.C>
        <S.RowTopLeft>
          <S.Coins />
        </S.RowTopLeft>
        <S.RowTopCenter>
          <S.Coins />
        </S.RowTopCenter>
        <S.RowTopRight>
          <S.Coins />
        </S.RowTopRight>

        <S.RowCenterLeft>
          <S.Coins />
        </S.RowCenterLeft>
        <S.RowCenterCenter>
          <S.Coins />
        </S.RowCenterCenter>
        <S.RowCenterRight>
          <S.Coins />
        </S.RowCenterRight>

        <S.RowBottomLeft>
          <S.Coins />
        </S.RowBottomLeft>
        <S.RowBottomCenter>
          <S.Coins />
        </S.RowBottomCenter>
        <S.RowBottomRight>
          <S.Coins />
        </S.RowBottomRight>
      </S.C>
    </p>

    <p>
      <S.C>
        <S.ColumnTopLeft>
          <S.Coins />
        </S.ColumnTopLeft>
        <S.ColumnTopCenter>
          <S.Coins />
        </S.ColumnTopCenter>
        <S.ColumnTopRight>
          <S.Coins />
        </S.ColumnTopRight>

        <S.ColumnCenterLeft>
          <S.Coins />
        </S.ColumnCenterLeft>
        <S.ColumnCenterCenter>
          <S.Coins />
        </S.ColumnCenterCenter>
        <S.ColumnCenterRight>
          <S.Coins />
        </S.ColumnCenterRight>

        <S.ColumnBottomLeft>
          <S.Coins />
        </S.ColumnBottomLeft>
        <S.ColumnBottomCenter>
          <S.Coins />
        </S.ColumnBottomCenter>
        <S.ColumnBottomRight>
          <S.Coins />
        </S.ColumnBottomRight>
      </S.C>
    </p>

    <p>
      Also, according to{" "}
      <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">this</a>
      :
    </p>
    <ul>
      <li>
        If the content orientation is <code>row</code>, then the first argument
        can be also <code>stretch|baseline</code>, and the second one is{" "}
        <code>space-between|space-around|space-evenly</code>
      </li>
      <li>
        If the content orientation is <code>column</code>, then it is visa-versa
      </li>
    </ul>

    <h3>group()</h3>
    <p>Adds horizontal and vertical gaps between the direct child nodes.</p>
    <ul>
      <li>The first argument stands for the vertical offset</li>
      <li>The second one &mdash; guess</li>
    </ul>

    <p>Example:</p>

    <SyntaxHL language="javascript" style={docco}>
      {`export const Groupped = styled.div\`
  \${group('1rem', '1rem')}
\`;`}
    </SyntaxHL>

    <S.Group>
      <S.Mushroom />
      <S.Mushroom />
      <S.Mushroom />
      <S.Mushroom />
      <S.Mushroom />
      <S.Mushroom />
      <S.Mushroom />
      <S.Mushroom />
      <S.Mushroom />
      <S.Mushroom />
      <S.Mushroom />
      <S.Mushroom />
      <S.Mushroom />
      <S.Mushroom />
      <S.Mushroom />
      <S.Mushroom />
      <S.Mushroom />
      <S.Mushroom />
      <S.Mushroom />
      <S.Mushroom />
      <S.Mushroom />
      <S.Mushroom />
      <S.Mushroom />
      <S.Mushroom />
    </S.Group>

    <h3>rectangle()</h3>
    <p>
      Sets height and width of the element to the specified values, and scales
      it, if necessary.
    </p>
    <ul>
      <li>The first argument stands for the vertical offset</li>
      <li>The second one &mdash; guess</li>
    </ul>
    <p>Example:</p>
    <SyntaxHL language="javascript" style={docco}>
      {`export const Rect = styled.div\`
  \${rectangle('10rem', '20rem', 0.5)}
\`;`}
    </SyntaxHL>
    <p>Will produce a rectangle of 5rem x 10rem:</p>
    <S.Rect />

    <h3>centralColumn()</h3>
    <p>
      Creates a central column which is typically used in a simple one-column
      design.
    </p>
    <p>Example:</p>
    <SyntaxHL language="javascript" style={docco}>
      {`export const MainContainer = styled.div\`
  \${centralColumn()}
\`;`}
    </SyntaxHL>

    <h3>disabled()</h3>
    <p>"Disables" an element on CSS-level.</p>
    <p>Example:</p>
    <SyntaxHL language="javascript" style={docco}>
      {`export const Disableable = styled.div\`
  \${props => props.disabled ? disabled() : ''}
\`;`}
    </SyntaxHL>
    <S.Disabled disabled>I am a sad disabled button</S.Disabled>

    {/*<h3>icon()</h3>*/}
    {/*<p>Adds a MaterialUI "button"</p>*/}
    {/*<SyntaxHL language="javascript" style={docco}>*/}
    {/*{`export const Icon = styled.div\`*/}
    {/*\${icon(\'face\', \'3rem\', \'2rem\')}*/}
    {/*\`;`}*/}
    {/*</SyntaxHL>*/}

    {/*<S.IconFace />*/}

    <h3>ellipsis()</h3>
    <p>
      Cuts the text if too long. This mixin is presented in any library, so I
      have decided to support the tradition :)
    </p>
    <p>Example:</p>
    <SyntaxHL language="javascript" style={docco}>
      {`export const TooLong = styled.div\`
  \${ellipsis()}
  width: 5rem;
\`;`}
    </SyntaxHL>

    <S.TooLong>Too cold, too early, too monday</S.TooLong>

    <h3>fgColor()</h3>
    <p>
      Sets a text color with optional on-hover effect with optional transition
    </p>
    <p>Example:</p>
    <SyntaxHL language="javascript" style={docco}>
      {`export const BeautifulA = styled.a\`
  \${fgColor('red', 'blue', '200ms')}
\`;`}
    </SyntaxHL>

    <S.BeautifulA href="#">Too cold, too early, too monday</S.BeautifulA>

    <h3>bgColor()</h3>
    <p>
      Sets a background color with optional on-hover and on-focus effects with
      optional transition
    </p>
    <p>Example:</p>
    <SyntaxHL language="javascript" style={docco}>
      {`export const BeautifulButton = styled.a\`
  \${bgColor('red', 'blue', 'green', '200ms')}
\`;`}
    </SyntaxHL>

    <S.BeautifulButton>Too cold, too early, too monday</S.BeautifulButton>

    <h3>underline()</h3>
    <p>
      Underlines a block of text with dashed line and a color of your choice and
      applies optional on-hover and on-focus effects with optional transition.
      Currently, only <code>on-hover</code> mode is supported, sorry :(
    </p>
    <p>Example:</p>
    <SyntaxHL language="javascript" style={docco}>
      {`export const DashEm = styled.span\`
  \${underline('on-hover', '1px', 'red', '200ms')}
\`;`}
    </SyntaxHL>

    <S.DashEm>Too cold, too early, too monday</S.DashEm>

    <h3>textDecoration()</h3>
    <p>
      Decorates text of a block <code>on-hover</code> or <code>on-hout</code>
    </p>
    <p>Example:</p>
    <SyntaxHL language="javascript" style={docco}>
      {`export const Decorated = styled.span\`
  \${textDecoration('on-hout', 'underline red')}
\`;`}
    </SyntaxHL>

    <S.Decorated>Too cold, too early, too monday</S.Decorated>

    <h3>heightTrick()</h3>
    <p>
      Creates a responsive container whose height is always the same as its
      width. The content of such container should be always absolute with top,
      bottom, left and right equal to zero.
    </p>
    <p>Example:</p>
    <SyntaxHL language="javascript" style={docco}>
      {`export const MagicSquare = styled.div\`
  \${heightTrick()}
\`;`}
    </SyntaxHL>

    <S.Constraint>
      <S.Equality>
        <S.EqInner>Too cold, too early, too monday</S.EqInner>
      </S.Equality>
    </S.Constraint>

    <br />
    <h2>Grids</h2>
    <p>
      I used to think that <code>sc-companion</code> is a cool library. But any
      cool UI library has it's own grid system. So I thought why don't I spend
      15 minutes of my time and code one?
    </p>

    <p>
      Some examples (sorry about the colors, did not make the syntax highlighter
      to work for JSX):
    </p>

    <SyntaxHL language="javascript" style={docco}>
      {`const { Grid, Cell } = makeGrid({ gutterH: '1rem', gutterV: '1rem' });

return (
    <Grid>
      <Cell sm={6} lg={4}>Left</Cell>
      <Cell sm={6} lg={4}>Middle</Cell>
      <Cell sm={12} lg={4}>Right</Cell>
    </Grid>
);`}
    </SyntaxHL>

    <S.Grid>
      <S.Cell sm={6} lg={4}>
        <S.GridInner>Left</S.GridInner>
      </S.Cell>
      <S.Cell sm={6} lg={4}>
        <S.GridInner>Middle</S.GridInner>
      </S.Cell>
      <S.Cell sm={12} lg={4}>
        <S.GridInner>Right</S.GridInner>
      </S.Cell>
    </S.Grid>

    <br />
    <SyntaxHL language="javascript" style={docco}>
      {`const { Grid, Cell } = makeGrid({
    gutterH: '0.5rem',
    gutterV: '0.5rem',
    resolution: 20,
    breakpoints: {
        a: 1400,
        b: 1200,
        c: 1000,
        d: 800,
        e: 600,
    },
});

return (
    <Grid>
      <Cell a={18} b={14} c={10} d={6} e={2}>
          Left
      </Cell>
      <Cell a={2} b={6} c={10} d={14} e={18}>
          Right
      </Cell>
      <Cell a={20}>
          Center
      </Cell>
      <Cell a={2} b={6} c={10} d={14} e={18}>
          Left
      </Cell>
      <Cell a={18} b={14} c={10} d={6} e={2}>
          Right
      </Cell>
    </Grid>
);`}
    </SyntaxHL>

    <S.GridAlt>
      <S.CellAlt a={18} b={14} c={10} d={6} e={2}>
        <S.GridInner>Left</S.GridInner>
      </S.CellAlt>
      <S.CellAlt a={2} b={6} c={10} d={14} e={18}>
        <S.GridInner>Right</S.GridInner>
      </S.CellAlt>
      <S.CellAlt a={20}>
        <S.GridInner>Center</S.GridInner>
      </S.CellAlt>
      <S.CellAlt a={2} b={6} c={10} d={14} e={18}>
        <S.GridInner>Left</S.GridInner>
      </S.CellAlt>
      <S.CellAlt a={18} b={14} c={10} d={6} e={2}>
        <S.GridInner>Right</S.GridInner>
      </S.CellAlt>
    </S.GridAlt>

    <br />
    <SyntaxHL language="javascript" style={docco}>
      {`const { Grid, Cell } = makeGrid({ gutterH: '1rem', gutterV: '1rem' });

return (
    <Grid>
      <Cell>Left</Cell>
      <Cell>Middle</Cell>
      <Cell>Right</Cell>
    </Grid>
);`}
    </SyntaxHL>

    <S.Grid>
      <S.Cell>
        <S.GridInner>Left</S.GridInner>
      </S.Cell>
      <S.Cell>
        <S.GridInner>Middle</S.GridInner>
      </S.Cell>
      <S.Cell>
        <S.GridInner>Right</S.GridInner>
      </S.Cell>
    </S.Grid>

    <br />
    <p>
      The default options for <code>makeGrid()</code> are aligned with the
      system of Bootstrap (breakpoints are set in pixels):
    </p>
    <SyntaxHL language="javascript" style={docco}>
      {`{
  resolution: 12,
  gutterH: 0,
  gutterV: 0,
  breakpoints: {
    xl: 1200,
    lg: 992,
    md: 768,
    sm: 576,
  },
}`}
    </SyntaxHL>

    <br />
    <p>
      I can also offer a mixin to create grids (which are slightly more
      powerful, because they allow to set responsive gutters):
    </p>

    <SyntaxHL language="javascript" style={docco}>
      {`const theme = {
    grid: {
        resolution: 20,
        breakpoints: {
            a: 1400,
            b: 1200,
            c: 1000,
            d: 800,
            e: 600,
        },
    },
};

export const Grid = styled.div\`
  \${props => grid({...props, config: theme.grid})}
\`;

export const Cell = styled.div\`
  \${props => cell({...props, config: theme.grid})}
\`;
`}
    </SyntaxHL>
    <p>And then:</p>
    <SyntaxHL language="javascript" style={docco}>
      {`<Grid gw-a="0.2rem" gw-b="0.5rem" gw-c="0.7rem" gw-d="1rem" gw-e="1.2rem">
    <Cell a={18} b={14} c={10} d={6} e={2}>
        Left
    </Cell>
    <Cell a={2} b={6} c={10} d={14} e={18}>
        Right
    </Cell>
</Grid>
`}
    </SyntaxHL>

    <S.GridNew
      gw-a="0.2rem"
      gw-b="0.5rem"
      gw-c="0.7rem"
      gw-d="1rem"
      gw-e="1.2rem"
    >
      <S.CellNew a={18} b={14} c={10} d={6} e={2}>
        <S.GridInner>Left</S.GridInner>
      </S.CellNew>
      <S.CellNew a={2} b={6} c={10} d={14} e={18}>
        <S.GridInner>Right</S.GridInner>
      </S.CellNew>
    </S.GridNew>
    <br />
    <p>
      Note, that <code>gw-[breakpoint]</code> and <code>gh-[breakpoint]</code>{" "}
      stand for "horizontal" and "vertical" gutters respectively.
    </p>

    <br />
    <h2>The Github repo</h2>
    <p>
      Is here:{" "}
      <a href="https://github.com/awesome1888/sc-companion">
        https://github.com/awesome1888/sc-companion
      </a>
    </p>

    <S.TBC>To be continued.... *epic music*</S.TBC>
  </Layout>
)

export default IndexPage
