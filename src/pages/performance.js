import React from "react"
import { Menu } from "../components/menu"
import Layout from "../components/layout"

import styled from "styled-components"

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
`
const AsideLeft = styled.div`
  display: flex;
  align-items: center;
`

const AsideRight = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
`

const NewsSectionHeader = styled.h2``

const ArticleWrapper = styled.div`
  margin: 30px 0;
  width: 80%;
  padding: 0 20px;
  max-width: unset;
  border-radius: 12px;
  color: darkGrey;
  border: 1px solid white;

  p {
    line-height: 1.6;
  }
`

const TitleWrapper = styled.div`
  h3 {
    margin: 0;
  }
  p {
    margin: 0;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  img {
    margin-left: 35px;
    max-width: 200px;
    object-fit: cover;
  }
`

const PerformancePage = () => (
  <Layout>
    <Wrapper>
      <AsideLeft>
        <Menu />
      </AsideLeft>
      <AsideRight>
        <ArticleWrapper>
          <NewsSectionHeader>University news feed</NewsSectionHeader>
          <TitleWrapper>
            <h3>title</h3>
            <p>category</p>
          </TitleWrapper>
          <ContentWrapper>
            <p>content</p>
          </ContentWrapper>
        </ArticleWrapper>
        <ArticleWrapper>
          <NewsSectionHeader>University news feed</NewsSectionHeader>
          <TitleWrapper>
            <h3>title</h3>
            <p>category</p>
          </TitleWrapper>
          <ContentWrapper>
            <p>content</p>
          </ContentWrapper>
        </ArticleWrapper>
        <ArticleWrapper>
          <NewsSectionHeader>University news feed</NewsSectionHeader>
          <TitleWrapper>
            <h3>title</h3>
            <p>category</p>
          </TitleWrapper>
          <ContentWrapper>
            <p>content</p>
          </ContentWrapper>
        </ArticleWrapper>
        <ArticleWrapper>
          <NewsSectionHeader>University news feed</NewsSectionHeader>
          <TitleWrapper>
            <h3>title</h3>
            <p>category</p>
          </TitleWrapper>
          <ContentWrapper>
            <p>content</p>
          </ContentWrapper>
        </ArticleWrapper>
        <ArticleWrapper>
          <NewsSectionHeader>University news feed</NewsSectionHeader>
          <TitleWrapper>
            <h3>title</h3>
            <p>category</p>
          </TitleWrapper>
          <ContentWrapper>
            <p>content</p>
          </ContentWrapper>
        </ArticleWrapper>
      </AsideRight>
    </Wrapper>
  </Layout>
)

export default PerformancePage
