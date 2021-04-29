import React from "react"
import { ThemeProvider } from "styled-components"
import { theme } from "../assets/styles/theme/theme"
import PropTypes from "prop-types"

import "./layout.css"

import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <main>{children}</main>
      </Wrapper>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
