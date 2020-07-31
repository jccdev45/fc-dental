import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

export default function Hero() {
  const img = useStaticQuery(graphql`
    query img {
      office: file(relativePath: { eq: "office-front.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div className="w-full h-auto mt-16 md:mt-6">
      <Img fluid={img.office.childImageSharp.fluid} />
    </div>
  );
}
