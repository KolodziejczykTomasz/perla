import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Logo.jpg" }) {
        childImageSharp {
          fixed(width: 700, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fixed) {
    return <div>Picture not found</div>
  }

  return (
    <Img
      fixed={data.placeholderImage.childImageSharp.fixed}         
      alt="Logo Band"      
    />
  )
}

export default Image
