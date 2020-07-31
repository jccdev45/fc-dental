import React, { useState, useRef } from "react";
import { navigate } from "gatsby";
import Layout from "../shared/layout";

function ContactPage() {
  const [state, setContactState] = useState({});
  const contactRef = useRef(null);

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = contactRef.current;

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate("/"))
      .catch((error) => alert(error));
    setContactState({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
      <section className="flex flex-col mx-6 mt-32">
        <div className="flex flex-col items-center justify-around md:flex-row">
          <div className="flex flex-col md:w-1/4">
            <ul className="px-4 py-2 my-6 text-2xl text-center text-white bg-blue-400 rounded md:py-12">
              <li>Dr. Albert M. Boyce, DDS</li>
              <li>313 Park Ave</li>
              <li>Suite 101</li>
              <li>Falls Church, VA 22046</li>
              <li>(703) 493-1243</li>
            </ul>
            <ul className="px-4 py-2 my-6 text-xl text-center text-white bg-blue-400 rounded md:py-12">
              <h2>Business Hours</h2>
              <li className="flex justify-between">
                <span className="font-bold">Monday:</span>{" "}
                <span>9 AM to 5 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="font-bold">Tuesday:</span>{" "}
                <span>9 AM to 5 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="font-bold">Wednesday:</span>{" "}
                <span>9 AM to 5 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="font-bold">Thursday:</span>{" "}
                <span>9 AM to 5 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="font-bold">Friday:</span>{" "}
                <span>9 AM to 1 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="font-bold">Saturday:</span> <span>Closed</span>
              </li>
              <li className="flex justify-between">
                <span className="font-bold">Sunday:</span> <span>Closed</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col md:w-1/2">
            <h1 className="mx-auto text-3xl">Contact Us</h1>
            <form
              className="my-10"
              method="post"
              action="/"
              netlify-honeypot="bot-field"
              data-netlify="true"
              name="Contact"
              onSubmit={handleSubmit}
              ref={contactRef}
            >
              <input type="hidden" name="bot-field" onChange={handleChange} />
              <input type="hidden" name="form-name" value="Contact" />
              <label
                className="block mb-2 text-xs font-bold uppercase"
                htmlFor="name"
              >
                Name
                <input
                  onChange={handleChange}
                  value={state.name}
                  name="name"
                  className="w-full mb-6 form-input"
                  id="name"
                  type="text"
                />
              </label>

              <label
                className="block mb-2 text-xs font-bold uppercase"
                htmlFor="email"
              >
                Email
                <input
                  onChange={handleChange}
                  value={state.email}
                  name="email"
                  className="w-full mb-6 form-input"
                  id="email"
                  type="email"
                />
              </label>

              <label
                className="block mb-2 text-xs font-bold uppercase"
                htmlFor="message"
              >
                Message
                <textarea
                  onChange={handleChange}
                  value={state.message}
                  name="message"
                  className="w-full mb-6 form-textarea"
                  id="message"
                  rows="8"
                />
              </label>

              <button
                className="px-4 py-2 text-sm font-bold text-white bg-blue-500 rounded shadow hover:border-blue-600 hover:bg-blue-600"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default ContactPage;
