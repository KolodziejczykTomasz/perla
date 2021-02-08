import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import "./layout.css"


import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column; 
  height: 100vh;  
`

const Footer = styled.div`
  height: 100px;
  background-color: black;
`
const MenuList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;
`
const MenuListItem = styled.li`
  justify-content: space-between;
  width: 150px;
  align-self: center;
`

const MenuListItemLink = styled(Link)`
color: #414141;
  &:hover {
    color: #fff;
  }
`

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <main>{children}</main>
      <Footer>
        <MenuList>
          <MenuListItem>
            <MenuListItemLink class="navbar-item">Zespół</MenuListItemLink>
          </MenuListItem>
          <MenuListItem>
            <MenuListItemLink class="navbar-item">Występy</MenuListItemLink>
          </MenuListItem>
          <MenuListItem>
            <MenuListItemLink class="navbar-item">Kontakt</MenuListItemLink>
          </MenuListItem>
        </MenuList>
      </Footer>
    </Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
