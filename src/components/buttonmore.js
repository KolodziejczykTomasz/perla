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
  font-weight: 600;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.darkViolet};
  border: 5px solid ${({ theme }) => theme.colors.darkGreen};
  text-transform: uppercase;
  border-radius: 50px;
  transition: 0.2s;
  &:hover {
    border: 5px solid ${({ theme }) => theme.colors.darkViolet};
  }

  & a {
    color: ${({ theme }) => theme.colors.darkViolet};
    text-decoration: none;
  }

  &:hover a {
    color: ${({ theme }) => theme.colors.darkGreen};
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
