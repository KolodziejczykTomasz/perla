import React from "react"
import PropTypes from "prop-types"

import "./layout.css"
import "bulma/css/bulma.css"

import styled from "styled-components"

const Wrapper = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: 0.9fr 0.1fr;
height: 70vh;
`

const Footer = styled.div`
  height: 5vh;
  background-color: black;
`

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <main>{children}</main>
      <Footer>
        <div>
          <p>
            The website content is licensed{" "}
            <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
              CC BY NC SA 4.0
            </a>
            .
          </p>
        </div>
      </Footer>
    </Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
