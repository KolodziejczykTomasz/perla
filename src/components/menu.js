import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  justify-content: space-between;
  align-self: center;
  text-decoration: none;
`

const activeClassName = "active"
const MenuLink = styled(Link).attrs({ activeClassName })`
  color: ${({ theme }) => theme.colors.darkViolet};
  padding: 10px 30px 10px 0;
  text-decoration: none;
  text-align: right;
  text-transform: uppercase;
  font-weight: 600;
  position: relative;
  &.${activeClassName} {
    &::after {
      opacity: 1;
    }
  }
  &::after {
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
    content: "";
    position: absolute;
    width: 18px;
    height: 5px;
    top: 50%;
    transform: translateX(-100%);
    right: -18px;
    background-color: ${({ theme }) => theme.colors.darkGreen};
  }
`

export const Menu = () => (
  <>
    <Wrapper>
      <MenuLink activeClassName="active" to="/">
        Home
      </MenuLink>
      <MenuLink to="/band">Zespół</MenuLink>
      <MenuLink to="/performance" active>Występy</MenuLink>
      <MenuLink to="/contact">Kontakt</MenuLink>
    </Wrapper>
  </>
)
