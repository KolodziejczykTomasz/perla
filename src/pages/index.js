import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import styled from "styled-components"

const Wrapper = styled.div`
  display: block;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  max-width: 1250px;
  height: 80%;
`
const BackgroundPhoto = styled(Image)`
  display: block;
  margin: 0 auto;
  width: 80%;
  max-width: 800px;
  max-height: 80%;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Wrapper>
      <BackgroundPhoto />
    </Wrapper>
  </Layout>
)

export default IndexPage
