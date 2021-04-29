import React from "react"
import { Menu } from "../components/menu"
import Layout from "../components/layout"
import Image from "../components/image"

import styled from "styled-components"

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  height: 100%;
  width: 100%;
`
const AsideLeft = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
`

const AsideRight = styled.div`
  display: grid;
  place-items: center;
`

const BackgroundPhoto = styled(Image)`
  display: grid;
  place-items: center;
`

const PerformancePage = () => (
  <Layout>
    <Wrapper>
      <AsideLeft>
        <Menu />
      </AsideLeft>
      <AsideRight>
        <BackgroundPhoto />
      </AsideRight>
    </Wrapper>
  </Layout>
)

export default PerformancePage
