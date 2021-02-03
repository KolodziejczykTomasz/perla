import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"

import styled from "styled-components"

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.4fr 0.6fr;
  height: 100%;
  width: 100%;
`
const AsideLeft = styled.div`
  display: grid;
  place-items: center;
  background-color: #616161;
`

const DescriptionBand = styled.div`
  display: grid;
  place-items: center;
  color: #fff;
  text-align: right;
  height: 300px;
  width: 100%;
  background-color: grey;
`

const AsideRight = styled.div`
  display: grid;
  place-items: center;
`

const BackgroundPhoto = styled(Image)`
  display: grid;
  place-items: center;
`

const IndexPage = () => (
  <Layout> 
    <Wrapper>
      <AsideLeft>
        <DescriptionBand>
          Zespół Tańca Ludowego Perła Warmii wykonuje polskie tańce narodowe,
          tańce warmińskie oraz suity z regionów: Spisz, Kurpie, Kaszuby,
          Biłgoraj, Opoczno, Śląsk, Górale Żywieccy, Krakowiacy Wschodni,
          Wileńszczyzna, Lublin.
        </DescriptionBand>
      </AsideLeft>
      <AsideRight>
        <BackgroundPhoto />
      </AsideRight>
    </Wrapper>
  </Layout>
)

export default IndexPage
