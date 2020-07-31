import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../shared/layout";

function ServicesPage() {
  const iconQuery = useStaticQuery(graphql`
    query ServiceIcons {
      bridge: file(relativePath: { eq: "bridge.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cerec: file(relativePath: { eq: "cerec.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      crown: file(relativePath: { eq: "crown.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dentures: file(relativePath: { eq: "dentures.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      general: file(relativePath: { eq: "general.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      implant: file(relativePath: { eq: "implant.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      whitening: file(relativePath: { eq: "whitening.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const services = [
    {
      name: `CEREC Dentistry`,
      icon: iconQuery.cerec.childImageSharp.fluid,
      intro: `Some people avoid cosmetic dental work because they don't have the time for repeat appointments. But thanks to Dr. Albert M. Boyce, DDS's CEREC services, a new and improved smile can soon be yours. All it takes is a single visit to our convenient Falls Church, VA office.`,
      sections: [
        {
          title: `Instant Results`,
          text: `The beauty of CEREC is that it allows our staff to perform a variety of dental restoration procedures in one visit to our Falls Church, VA office, including: crowns, veneers, bonding, onlays, inlays.
        CEREC restorations can give your restored tooth a more natural match to the rest of your teeth, and can help preserve the healthy part of that tooth as well. And as an added bonus, the composite materials used at Dr. Albert M. Boyce, DDS will look and feel just like your other teeth.`,
        },
        {
          title: `Make the Call`,
          text: `When it comes to cosmetic dentistry, CEREC offers the ultimate in patient convenience. So what are you waiting for? Call our office today to schedule your consultation, and get ready to be amazed.`,
        },
      ],
    },
    {
      name: `Dental Bridges`,
      icon: iconQuery.bridge.childImageSharp.fluid,
      intro: `Missing teeth can have a serious effect not only on your smile, but also on your oral health. Missing teeth can impact the alignment and integrity of your surrounding teeth, causing you further problems down the road. And missing teeth can also result in unwanted periodontal disease and decay. If you're missing teeth, come to Dr. Albert M. Boyce, DDS, a Falls Church, VA dentist office that provides dental bridges to patients in need.`,
      sections: [
        {
          title: `Multiple Benefits`,
          text: `Dental bridges from Dr. Albert M. Boyce, DDS can fill in the gaps where teeth are missing while helping to preserve the structure of your remaining teeth and bite. Dental bridges help our Falls Church, VA patients eat more comfortably and smile more confidently. And when you come to Dr. Albert M. Boyce, DDS for dental bridges, you'll benefit from our dedicated staff and gentle, individualized approach to restorative dentistry.

        To find out more about dental bridges or to schedule an appointment, call Dr. Albert M. Boyce, DDS today.`,
        },
      ],
    },
    {
      name: `Dental Crowns`,
      icon: iconQuery.crown.childImageSharp.fluid,
      intro: `Are you tired of staring at that chipped tooth at the front of your mouth? Dr. Albert M. Boyce, DDS may have the answer, and it comes in the form of dental crowns. As a trusted dentist office in Falls Church, VA, we offer crowns for cosmetic and restorative purposes so that our valued patients can enjoy their smiles while preserving their oral health.`,
      sections: [
        {
          title: `Invest in Your Smile and Health`,
          text: `A dental crown from Dr. Albert M. Boyce, DDS may work to improve your smile while helping to maintain the affected tooth as well as the teeth that surround it. And when you visit our Falls Church, VA office, you'll benefit from our informative consultations, caring, attentive staff and flexible payment options. It's time to make an investment in your smile. For more information about our dental crowns or to schedule an appointment, call Dr. Albert M. Boyce, DDS today.`,
        },
      ],
    },
    {
      name: `Dental Implants`,
      icon: iconQuery.implant.childImageSharp.fluid,
      intro: `If you have lost or missing teeth, you may wish to consider dental implants from Dr. Albert M. Boyce, DDS. At our Falls Church, VA office, we offer implant dentistry services designed to restore your teeth and maintain the structural integrity of your mouth.`,
      sections: [
        {
          title: `Restore Your Smile`,
          text: `Whether your missing tooth is the result of periodontitis, tooth decay or an injury, Dr. Albert M. Boyce, DDS can help restore your smile with a beautiful new dental implant that looks and functions just like a real tooth. Significantly stronger than bridges or dentures, dental implants offers a single and permanent solution to lost teeth. And when you come to Dr. Albert M. Boyce, DDS, you'll be treated with the nurturing care and professionalism that embodies our practice.

        Have questions? Just call today to schedule a consultation. We'll walk you through the implant process and address any questions or concerns you might have. A new and improved smile can be yours thanks to our dental implants, so contact us right away.`,
        },
      ],
    },
    {
      name: `Dentures`,
      icon: iconQuery.dentures.childImageSharp.fluid,
      intro: `When you think it's time to start talking to a professional about Falls Church, VA, dentures, call the staff at Dr. Albert M. Boyce, DDS to make sure you have all the information you need. Our highly trained staff is devoted to continuing their education, so you can trust that we'll provide you with the most current information. We're conveniently located in Falls Church, VA.`,
      sections: [
        {
          title: `Smile Confidently Again`,
          text: `Though you might feel a bit of trepidation of using dentures, you should know that they have come a long way thanks to the progress of technology. Today's dentures work more like natural teeth and can be custom fitted to your mouth in order to better secure them. You can trust our office to take care of your needs in a way you may not have thought possible. We're a fully licensed and insured company, and we benefit from over 37 years of practice in Falls Church. We understand how some people might feel a bit of fear at coming to a dentist office, but know that our staff is devoted to your comfort and providing you with the gentle care you deserve.

        Trust Dr. Albert M. Boyce, DDS to provide you with the information you need about Falls Church, VA, dentures. We are members of the American Dental Association, and we are committed to continual education of our staff and our patients regarding dental care. For more information, or to set up an appointment, contact our Falls Church, VA, office today.`,
        },
      ],
    },
    {
      name: `General Dentistry`,
      icon: iconQuery.general.childImageSharp.fluid,
      intro: `If you've been looking for a qualified Falls Church, VA, dental care provider that you can trust, look no further than Dr. Albert M. Boyce, DDS. Whether you need a dentist who can provide you with a regular cleaning, or you need to discuss the details of a more complex procedure, such as an implant, our staff members can help you with your needs. We're proud to offer our services to the Falls Church, VA, area.`,
      sections: [
        {
          title: `Anything You Need`,
          text: `We're a family owned and operated company that is devoted to the comfort and relaxation of all our Falls Church patients. We have 37 years of experience and we are also members of the American Dental Association. Most dental insurances are accepted here, and we work with a team of periodontists in the same office. Trust our staff to provide you with the experienced, gentle care you need to make sure your teeth stay strong and healthy. Our office provides multiple services, including: dental crowns and bridges, implants, dentures and teeth whitening. Contact our Falls Church, VA, office today and speak with a Dr. Albert M. Boyce, DDS professional if you need more information. Trust our staff to set you up with the Falls Church, VA, dental care that you've been looking for today.`,
        },
      ],
    },
    {
      name: `Teeth Whitening`,
      icon: iconQuery.whitening.childImageSharp.fluid,
      intro: `Many people associate professional teeth whitening with movie stars and brides. But in fact, it is an extremely popular procedure in cosmetic dentistry. And at Dr. Albert M. Boyce, DDS, we help our Falls Church, VA patients achieve brighter, whiter smiles with our teeth whitening services.`,
      sections: [
        {
          title: `Let Your Smile Stand Out`,
          text: `Stained or discolored teeth are very common among adults of all ages, and come from a variety of sources, such as: coffee, red wine, soda, tea, tobacco and some medications. The key to a long-lasting, bright, white smile is to have your teeth whitened before discoloration becomes too severe. When you come to Dr. Albert M. Boyce, DDS for teeth whitening services, you'll get solid advice, professional care, and a smile that will renew your confidence. Call today to set up an appointment.`,
        },
      ],
    },
  ];

  const [selected, setSelected] = useState(services[0]);

  const servicesFilter = (name) => {
    let filtered = services.filter((service) => name === service.name);

    setSelected(filtered[0]);
  };

  const nameMap = () => {
    return services.map((service) => (
      <button
        key={service.name}
        onClick={() => servicesFilter(service.name)}
        className={`${
          selected.name === service.name ? "bg-blue-400 p-1 rounded" : ""
        } mx-6 my-2 focus:outline-none`}
      >
        {service.name}
      </button>
    ));
  };

  return (
    <Layout>
      <section className="mx-8 mt-24 md:mx-20">
        <div className="p-4 overflow-auto text-white whitespace-no-wrap bg-blue-600 rounded-lg md:flex-wrap">
          {nameMap()}
        </div>
        {selected && (
          <div className="my-4 md:text-xl">
            <div className="w-20 h-20 mx-auto my-6">
              <Img fluid={selected.icon} />
            </div>
            <h1>{selected.intro}</h1>
            {selected.sections.map((section) => {
              const { title, text } = section;
              return (
                <div key={title} className="my-4">
                  <h2 className="mx-auto text-blue-400 uppercase">{title}</h2>
                  <p>{text}</p>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </Layout>
  );
}

export default ServicesPage;
