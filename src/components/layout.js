import React from "react"
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
    <Wrapper>
      <main>{children}</main>      
    </Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
