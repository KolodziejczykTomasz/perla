import React from "react"
import { ButtonMore } from "../components/buttonmore"
import Layout from "../components/layout"
import Image from "../components/image"

import styled from "styled-components"

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.4fr 0.6fr;
  height: 100vh;
  width: 100%;
  position: relative;
`

const ButtonWrapper = styled.div`
  position: absolute;
  right: 100px;
  bottom: 100px;
`

const AsideLeft = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.darkViolet};
`

const DescriptionBand = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  text-align: right;
  height: 300px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.darkViolet};
  padding-right: 40px;
  padding-left: 40px;
  font-size: 26px;
  border-right: 5px solid ${({ theme }) => theme.colors.darkGreen};
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
        <ButtonWrapper>
          <ButtonMore />
        </ButtonWrapper>
      </AsideRight>
    </Wrapper>
  </Layout>
)

export default IndexPage
