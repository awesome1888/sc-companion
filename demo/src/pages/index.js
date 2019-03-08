import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import * as S from "../lib/"
// import * as S from 'sc-companion';
//
console.dir(S)

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

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
