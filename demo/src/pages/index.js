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
    <h1>What?</h1>
    <p>
      Yes, another library, that provides a set of useful mixins to make the
      development process easier, if you utilize styled-components in your
      front-end.
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

    <h2>A brief into in the available mixins</h2>

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
      {`export const = styled.div\`
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
  </Layout>
)

export default IndexPage
