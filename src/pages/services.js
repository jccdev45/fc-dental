import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../shared/layout";
import ContactBox from "../components/ContactBox";

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
      intro: `Some people avoid cosmetic dental work because they don't have the time for repeat appointments. But thanks to our CEREC services, a new and improved smile can soon be yours. All it takes is a single visit to our convenient Falls Church, VA office.`,
      sections: [
        {
          title: `Instant Results`,
          text: `The beauty of CEREC is that it allows our staff to perform a variety of dental restoration procedures in one visit, such as: crowns, veneers, bonding, onlays, inlays. CEREC restorations can give your restored tooth a more natural match to the rest of your teeth, and can help preserve the healthy part of that tooth as well. And as an added bonus, the composite materials used will look and feel just like your other teeth.`,
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
      intro: `Missing teeth can have a serious effect not only on your smile, but also on your oral health. Missing teeth can impact the alignment and integrity of your surrounding teeth, causing you further problems down the road. Missing teeth can also result in unwanted periodontal disease and decay. If you're missing teeth, come to a Falls Church dentist office that provides dental bridges to patients in need.`,
      sections: [
        {
          title: `Multiple Benefits`,
          text: `Dental bridges can fill in the gaps where teeth are missing while helping to preserve the structure of your remaining teeth and bite. Dental bridges help our patients eat more comfortably and smile more confidently. And when you come to us for dental bridges, you'll benefit from our dedicated staff and gentle, individualized approach to restorative dentistry.

        To find out more about dental bridges or to schedule an appointment, call us today.`,
        },
      ],
    },
    {
      name: `Dental Crowns`,
      icon: iconQuery.crown.childImageSharp.fluid,
      intro: `Are you tired of staring at that chipped tooth at the front of your mouth? We may have the answer, and it comes in the form of dental crowns. As a highly trusted dentist in the Falls Church community, we offer crowns for cosmetic and restorative purposes so that our valued patients can enjoy their smiles while preserving their oral health.`,
      sections: [
        {
          title: `Invest in Your Smile and Health`,
          text: `A dental crown may work to improve your smile while helping to maintain the affected tooth as well as the teeth that surround it. When you visit, you'll benefit from our informative consultations, caring, attentive staff and flexible payment options. It's time to make an investment in your smile. For more information about our dental crowns or to schedule an appointment, call us whenever you are ready.`,
        },
      ],
    },
    {
      name: `Dental Implants`,
      icon: iconQuery.implant.childImageSharp.fluid,
      intro: `If you have lost or missing teeth, you may wish to consider dental implants. We offer implant dentistry services designed to restore your teeth and maintain the structural integrity of your mouth.`,
      sections: [
        {
          title: `Restore Your Smile`,
          text: `Whether your missing tooth is the result of periodontitis, tooth decay or an injury, we can help restore your smile with a beautiful new dental implant that looks and functions just like a real tooth. Significantly stronger than bridges or dentures, dental implants offers a single and permanent solution to lost teeth.

          Questions? Just call today to schedule a consultation. We'll walk you through the implant process and address any questions or concerns you might have. A new and improved smile can be yours thanks to our dental implants, so contact us right away.`,
        },
      ],
    },
    {
      name: `Dentures`,
      icon: iconQuery.dentures.childImageSharp.fluid,
      intro: `When you think it's time to start talking to a professional about dentures, call us as soon as you're ready to make sure you have all the information you need. Our highly trained staff is devoted to continuing their education, so you can trust that we'll provide you with the most current information.`,
      sections: [
        {
          title: `Smile Confidently Again`,
          text: `Though you might feel a bit of trepidation about using dentures, you should know that they have come a long way thanks to the progress of technology. Today's dentures work more like natural teeth and can be custom fitted to your mouth in order to better secure them. You can trust our office to take care of your needs in a way you may not have thought possible. We understand how some people might feel a bit of fear at coming to a dentist office, but know that our staff is devoted to your comfort and providing you with the gentle care you deserve.

          Trust us to provide you with the information you need about your dentures. We are members of the American Dental Association, and we are committed to continual education of our staff and our patients regarding dental care. Contact us any time for more information.`,
        },
      ],
    },
    {
      name: `General Dentistry`,
      icon: iconQuery.general.childImageSharp.fluid,
      intro: `If you've been looking for a qualified dental care provider that you can trust, look no further. Whether you need a dentist who can provide you with a regular cleaning, or you need to discuss the details of a more complex procedure, such as an implant, our staff members can help you with your needs.`,
      sections: [
        {
          title: `Anything You Need`,
          text: `We're a family owned and operated company that is devoted to the comfort and relaxation of all our Falls Church patients. We have 37 years of experience and we are also members of the American Dental Association. Most dental insurances are accepted here, and we work with a team of periodontists in the same office. Trust our staff to provide you with the experienced, gentle care you need to make sure your teeth stay strong and healthy. `,
        },
      ],
    },
    {
      name: `Teeth Whitening`,
      icon: iconQuery.whitening.childImageSharp.fluid,
      intro: `Many people associate professional teeth whitening with movie stars and brides but in fact, it is an extremely popular procedure in cosmetic dentistry. We help our patients achieve brighter, whiter smiles with our teeth whitening services.`,
      sections: [
        {
          title: `Let Your Smile Stand Out`,
          text: `Stained or discolored teeth are very common among adults of all ages, and come from a variety of sources, such as: coffee, red wine, soda, tea, tobacco and some medications. The key to a long-lasting, bright, white smile is to have your teeth whitened before discoloration becomes too severe. When you come to us for teeth whitening services, you'll get solid advice, professional care, and a smile that will renew your confidence.`,
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
          selected.name === service.name ? "bg-blue-400 shadow-lg" : ""
        } mx-4 my-2 p-1 focus:outline-none hover:bg-blue-300 rounded transition-colors ease-in-out duration-300 first:ml-3 last:mr-3`}
      >
        {service.name}
      </button>
    ));
  };

  return (
    <Layout>
      <section className="h-full mx-8 mt-24 md:my-32 md:mx-20">
        <div className="flex flex-no-wrap justify-between py-4 overflow-auto text-center text-white whitespace-no-wrap bg-blue-600 rounded-lg">
          {nameMap()}
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="max-w-4xl mx-auto my-16 text-justify min-h-3/4 md:text-xl">
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
          <ContactBox style="flex justify-center h-1/4" />
        </div>
      </section>
    </Layout>
  );
}

export default ServicesPage;
