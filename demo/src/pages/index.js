import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import * as S from "../components/aux-style.js"

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

    <div>
      <S.C>
        <S.RowTopLeft>
          <S.BlueSquare />
          <S.BlueSquare />
        </S.RowTopLeft>
        <S.RowTopCenter>
          <S.BlueSquare />
          <S.BlueSquare />
        </S.RowTopCenter>
        <S.RowTopRight>
          <S.BlueSquare />
          <S.BlueSquare />
        </S.RowTopRight>

        <S.RowCenterLeft>
          <S.BlueSquare />
          <S.BlueSquare />
        </S.RowCenterLeft>
        <S.RowCenterCenter>
          <S.BlueSquare />
          <S.BlueSquare />
        </S.RowCenterCenter>
        <S.RowCenterRight>
          <S.BlueSquare />
          <S.BlueSquare />
        </S.RowCenterRight>

        <S.RowBottomLeft>
          <S.BlueSquare />
          <S.BlueSquare />
        </S.RowBottomLeft>
        <S.RowBottomCenter>
          <S.BlueSquare />
          <S.BlueSquare />
        </S.RowBottomCenter>
        <S.RowBottomRight>
          <S.BlueSquare />
          <S.BlueSquare />
        </S.RowBottomRight>
      </S.C>

      <S.C>
        <S.ColumnTopLeft>
          <S.BlueSquare />
          <S.BlueSquare />
        </S.ColumnTopLeft>
        <S.ColumnTopCenter>
          <S.BlueSquare />
          <S.BlueSquare />
        </S.ColumnTopCenter>
        <S.ColumnTopRight>
          <S.BlueSquare />
          <S.BlueSquare />
        </S.ColumnTopRight>

        <S.ColumnCenterLeft>
          <S.BlueSquare />
          <S.BlueSquare />
        </S.ColumnCenterLeft>
        <S.ColumnCenterCenter>
          <S.BlueSquare />
          <S.BlueSquare />
        </S.ColumnCenterCenter>
        <S.ColumnCenterRight>
          <S.BlueSquare />
          <S.BlueSquare />
        </S.ColumnCenterRight>

        <S.ColumnBottomLeft>
          <S.BlueSquare />
          <S.BlueSquare />
        </S.ColumnBottomLeft>
        <S.ColumnBottomCenter>
          <S.BlueSquare />
          <S.BlueSquare />
        </S.ColumnBottomCenter>
        <S.ColumnBottomRight>
          <S.BlueSquare />
          <S.BlueSquare />
        </S.ColumnBottomRight>
      </S.C>
    </div>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
