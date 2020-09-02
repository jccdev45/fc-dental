import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../shared/layout";
import SEO from "../shared/seo";
import Hero from "../components/hero";

export default function Home() {
  const iconQuery = useStaticQuery(graphql`
    query Icon {
      dentist: file(relativePath: { eq: "dentist.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      handshake: file(relativePath: { eq: "handshake.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      services: file(relativePath: { eq: "services.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const info = [
    {
      icon: iconQuery.handshake.childImageSharp.fluid,
      leading: `We understand that some...`,
      body: `might feel a little frightened at the prospect of visiting a
      dentist’s office, but we promise to provide you with a relaxing
      atmosphere, and comfortable care in order to take your mind off
      your worries. Our highly trained staff is friendly, and devoted to
      your comfort. Our company is family owned and operated, and all of
      our staff members are fully licensed and insured. We benefit from
      37 years of practicing in Falls Church, so please let us use what
      we’ve learned to help you keep your teeth and gums healthy.`,
    },
    {
      icon: iconQuery.dentist.childImageSharp.fluid,
      leading: `When you need a professional...`,
      body: `trust the staff at Dr. Albert M. Boyce, DDS for quality care. Even
      if you regularly brush and floss your teeth, we recommend a
      check-up and cleaning be done by one of our professionals once
      every six months in order to make sure that any forming problems
      are spotted quickly. We’re proud to take care of our Falls Church,
      VA, patients.`,
    },
    {
      icon: iconQuery.services.childImageSharp.fluid,
      leading: `Depend on the qualified services...`,
      body: `from Dr. Albert M. Boyce, DDS today. We are members of the American Dental Association, and we also work with a team of periodontists in the same office. For more information on how we can help you strengthen your smile, contact our Falls Church, VA, office and speak with one of our knowledgeable staff members.`,
    },
  ];

  const infoMap = () => {
    return info.map((item) => (
      <div
        key={item.leading}
        className="p-6 m-6 bg-blue-400 rounded-lg shadow-xl md:w-1/3 md:m-10"
      >
        <div className="w-16 h-16 mx-auto tooltip">
          <span className="-mt-10 -ml-40 text-white bg-blue-300 rounded tooltip-text">
            Icons made by
            <a href="http://www.freepik.com/" title="Freepik">
              Freepik
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              {" "}
              www.flaticon.com
            </a>
          </span>
          <Img fluid={item.icon} className="my-2" />
        </div>
        <p className="block my-4 text-xl font-bold text-center uppercase">
          {item.leading}
        </p>
        <p>{item.body}</p>
      </div>
    ));
  };

  return (
    <Layout>
      <SEO
        keywords={[
          `fcdental`,
          `falls church dental`,
          `falls church dentist`,
          `falls church va`,
          `dr albert m boyce`,
          `albert m boyce dds`,
          `cerec dentistry`,
          `dental bridges`,
          `dental crowns`,
          `dental implants`,
          `dentures`,
          `general dentistry`,
          `teeth whitening`,
        ]}
        title="Home"
      />

      <section className="flex flex-col items-center h-full">
        <Hero />
        <div className="z-10 flex flex-col text-lg text-center text-white md:text-justify md:flex-row md:flex-wrap md:justify-center">
          {infoMap()}
        </div>
      </section>
    </Layout>
  );
}
