import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import styled from "styled-components"

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.4fr 0.6fr;
  height: 80vh;
  width: 100%;
`
const AsideLeft = styled.div`
  background-color: #616161;  
`

const Description = styled.p`
  display: flex;
  color: #fff;
  text-align: right;
  height: 300px;
  width: 100%;
`

const AsideRight = styled.div`
  align-self: center;
`

const BackgroundPhoto = styled(Image)`
  display: block;
  margin: 0 auto;
  width: 80%;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Wrapper>
      <AsideLeft>
        <Description>
          Zespół Tańca Ludowego Perła Warmii wykonuje polskie tańce narodowe,
          tańce warmińskie oraz suity z regionów: Spisz, Kurpie, Kaszuby,
          Biłgoraj, Opoczno, Śląsk, Górale Żywieccy, Krakowiacy Wschodni,
          Wileńszczyzna, Lublin.
        </Description>
      </AsideLeft>
      <AsideRight>
        <BackgroundPhoto />
      </AsideRight>
    </Wrapper>
  </Layout>
)

export default IndexPage
