import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 80px;
  height: 80px;
  background-color: black;
  text-transform: uppercase;
  border-radius: 50px;
  transition: 0.2s;
  & a {
    color: #414141;
    text-decoration: none;
  }

  &:hover a {
    color: white;
    text-decoration: none;
  }
`

export const ButtonMore = () => (
  <>
    <Wrapper>
      <Link to="/performance">More</Link>
    </Wrapper>
  </>
)
