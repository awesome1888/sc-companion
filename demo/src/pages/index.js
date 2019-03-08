import React from "react"
import { Link } from "gatsby"
import SyntaxHighlighter from "react-syntax-highlighter"
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import * as S from "../components/aux-style.js"

const codeString = "(num) => num + 1"

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

    <h2>align()</h2>
    <p>Uses flexbox to produce aligned containers.</p>

    <SyntaxHighlighter language="javascript" style={docco}>
      {codeString}
    </SyntaxHighlighter>

    <div>
      <S.C>
        <S.RowTopLeft>
          <S.Coin />
          <S.Coin />
        </S.RowTopLeft>
        <S.RowTopCenter>
          <S.Coin />
          <S.Coin />
        </S.RowTopCenter>
        <S.RowTopRight>
          <S.Coin />
          <S.Coin />
        </S.RowTopRight>

        <S.RowCenterLeft>
          <S.Coin />
          <S.Coin />
        </S.RowCenterLeft>
        <S.RowCenterCenter>
          <S.Coin />
          <S.Coin />
        </S.RowCenterCenter>
        <S.RowCenterRight>
          <S.Coin />
          <S.Coin />
        </S.RowCenterRight>

        <S.RowBottomLeft>
          <S.Coin />
          <S.Coin />
        </S.RowBottomLeft>
        <S.RowBottomCenter>
          <S.Coin />
          <S.Coin />
        </S.RowBottomCenter>
        <S.RowBottomRight>
          <S.Coin />
          <S.Coin />
        </S.RowBottomRight>
      </S.C>

      <S.C>
        <S.ColumnTopLeft>
          <S.Coin />
          <S.Coin />
        </S.ColumnTopLeft>
        <S.ColumnTopCenter>
          <S.Coin />
          <S.Coin />
        </S.ColumnTopCenter>
        <S.ColumnTopRight>
          <S.Coin />
          <S.Coin />
        </S.ColumnTopRight>

        <S.ColumnCenterLeft>
          <S.Coin />
          <S.Coin />
        </S.ColumnCenterLeft>
        <S.ColumnCenterCenter>
          <S.Coin />
          <S.Coin />
        </S.ColumnCenterCenter>
        <S.ColumnCenterRight>
          <S.Coin />
          <S.Coin />
        </S.ColumnCenterRight>

        <S.ColumnBottomLeft>
          <S.Coin />
          <S.Coin />
        </S.ColumnBottomLeft>
        <S.ColumnBottomCenter>
          <S.Coin />
          <S.Coin />
        </S.ColumnBottomCenter>
        <S.ColumnBottomRight>
          <S.Coin />
          <S.Coin />
        </S.ColumnBottomRight>
      </S.C>
    </div>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
