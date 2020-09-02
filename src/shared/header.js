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
      title: `PatientConnect`,
    },
  ];

  const routesMap = () => {
    return routes.map((link) => {
      let style =
        "block mx-6 mt-4 p-2 rounded md:inline-block md:mt-0 md:ml-6 hover:bg-blue-300 transition-colors ease-in-out duration-300";

      return link.route.charAt(0) === "/" ? (
        <AniLink
          key={link.title}
          to={link.route}
          paintDrip
          hex="0076c2"
          duration={0.5}
          activeClassName="active"
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
    <header className="fixed top-0 z-50 w-full p-4 text-xl text-white bg-blue-500 md:p-6">
      <div className="flex flex-wrap justify-between w-full">
        <AniLink
          to="/"
          paintDrip
          hex="0076c2"
          activeClassName="active"
          duration={0.5}
          className="flex items-center p-1 pr-2 transition-colors duration-300 ease-in-out rounded hover:bg-blue-300"
        >
          <FaTooth className="w-5 h-5 mx-2" />
          {site.siteMetadata.title}
        </AniLink>
        <button
          onClick={() => setExpanded(!expanded)}
          className={`${
            expanded ? "bg-blue-300 opened shadow-md" : ""
          } bg-blue-400 flex items-center p-2 rounded md:hidden focus:outline-none transition-colors duration-200 ease-in-out menu`}
        >
          <svg className="w-6 h-6" viewBox="0 0 100 100">
            <title>Menu</title>
            <path
              className="line line1"
              d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
            />
            <path className="line line2" d="M 20,50 H 80" />
            <path
              className="line line3"
              d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
            />
          </svg>
        </button>
        <nav
          className={`${
            expanded ? `block` : `hidden`
          } md:flex w-full md:w-auto md:items-center mt-4 md:mt-0 border-t-2 border-white md:border-none`}
        >
          {routesMap()}
        </nav>
      </div>
    </header>
  );
}
