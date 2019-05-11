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
import { TooLong } from "../components/aux-style.js"

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

    <TooLong>Too cold, too early, too monday</TooLong>

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

    <SyntaxHL language="javascript" style={docco}>
      {`
const theme = {
  grid: {
    resolution: 12,
    breakpoints: {
        xs: [null, 767], // max-width: 767
        sm: [768, 991], // min-width: 768 and max-width: 991
        md: [992, 1199], // min-width: 992 and max-width: 1199
        lg: [1200, null],  // min-width: 1200
    },
  },
};

const Grid = styled.div\`
  \${grid({gutters: {all: '1rem', md: '0.7rem', sm: '0.5rem', xs: '0.2rem'}}, theme.grid)}
\`

const Cell = styled.div\`
    \${cell({xs: 3, sm: 6, md: 9, lg: 12}, theme.grid)}
\`

const CellRev = styled.div\`
    \${cell({xs: 9, sm: 6, md: 3, lg: 12}, theme.grid)}
\`
`}
    </SyntaxHL>

    <p>And then:</p>
    <SyntaxHL language="javascript" style={docco}>
      {`<Grid>
  <Cell>
    Left
  </Cell>
  <CellRev>
    Right
  </CellRev>
  <CellRev>
    Left
  </CellRev>
  <Cell>
    Right
  </Cell>
</Grid>
`}
    </SyntaxHL>

    <S.Grid>
      <S.Cell>
        <S.GridInner>Left</S.GridInner>
      </S.Cell>
      <S.CellRev>
        <S.GridInner>Right</S.GridInner>
      </S.CellRev>
      <S.CellRev>
        <S.GridInner>Left</S.GridInner>
      </S.CellRev>
      <S.Cell>
        <S.GridInner>Right</S.GridInner>
      </S.Cell>
    </S.Grid>
    <br />

    <br />
    <h2>z-Index constants</h2>
    <p>
      If we name each z-index level by a name, wouldn't it be easier to work?
    </p>

    <S.Levels>
      <S.Sun>
        zIxSun
        <br />
        7000
      </S.Sun>
      <S.Venus>
        zIxVenus
        <br />
        6000
      </S.Venus>
      <S.Mars>
        zIxMars
        <br />
        5000
      </S.Mars>
      <S.Moon>
        zIxMoon
        <br />
        4000
      </S.Moon>
      <S.Orbit>
        zIxOrbit
        <br />
        3000
      </S.Orbit>
      <S.Stratosphere>
        zIxStratosphere
        <br />
        2000
      </S.Stratosphere>
      <S.Everest>
        zIxEverest
        <br />
        1000
      </S.Everest>
      <S.Ground>
        zIxGround
        <br />0
      </S.Ground>
      <S.SeaBottom>
        zIxSeaBottom
        <br />
        -1000
      </S.SeaBottom>
      <S.Hell>
        zIxHell
        <br />
        -2000
      </S.Hell>
    </S.Levels>

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
      {`export const Disableabled = styled.div\`
  \${props => props.disabled ? disabled() : ''}
\`;`}
    </SyntaxHL>
    <S.Disabled disabled>I am a sad disabled button</S.Disabled>
    <br />
    <br />
    <SyntaxHL language="javascript" style={docco}>
      {`export const DisableabledForm = styled.div\`
  \${props => props.disabled ? disabled(0.3) : ''}
\`;`}
    </SyntaxHL>
    <S.DisabledForm>
      <div>
        You can't select me, I am disabled. Also, I am almost invisible, because
        the <code>opacity</code> parameter was set to <code>0.3</code>
      </div>
      <button>This button cannot be clicked.</button>{" "}
      <input
        type="text"
        value="This input can't be changed"
        style={{ width: "300px" }}
      />
    </S.DisabledForm>
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
