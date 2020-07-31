import React, { useState } from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { useStaticQuery, graphql } from "gatsby";
import { FaTooth } from "react-icons/fa";

export default function Header() {
  const [expanded, setExpanded] = useState(false);

  const { site } = useStaticQuery(graphql`
    query SiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const routes = [
    {
      route: `/services`,
      title: `Services`,
    },
    {
      route: `/contact`,
      title: `Contact`,
    },
    {
      route: `https://d1.patientconnect365.com/Portal/1ed5a0921e0744e5b30d9524c83509ef/PatientReviews`,
      title: `Reviews`,
    },
  ];

  const routesMap = () => {
    return routes.map((link) => {
      let style = "block mx-6 mt-4 md:inline-block md:mt-0 md:ml-6";

      return link.route.charAt(0) === "/" ? (
        <AniLink
          key={link.title}
          to={link.route}
          cover
          bg="rgb(0, 118, 194)"
          duration={0.75}
          className={style}
        >
          {link.title}
        </AniLink>
      ) : (
        <a
          key={link.title}
          href={link.route}
          target="_blank"
          rel="noreferrer"
          className={style}
        >
          {link.title}
        </a>
      );
    });
  };

  return (
    <header className="fixed top-0 z-50 w-full p-6 text-xl text-white bg-blue-500">
      <div className="flex flex-wrap justify-between w-full">
        <AniLink
          to="/"
          cover
          bg="rgb(0, 118, 194)"
          duration={0.75}
          className="flex items-center"
        >
          <FaTooth className="w-5 h-5 mx-2" />
          {site.siteMetadata.title}
        </AniLink>
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center p-2 border border-white rounded md:hidden focus:outline-none"
        >
          <svg
            className="w-3 h-3 fill-current focus:outline-none"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
        <nav
          className={`${
            expanded ? `block` : `hidden`
          } md:flex w-full md:w-auto md:items-center`}
        >
          {routesMap()}
        </nav>
      </div>
    </header>
  );
}
