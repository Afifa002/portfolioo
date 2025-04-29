// import React, { useRef } from "react";
// import "./Contact.css";
// import gitImg from "../assets/github.png";
// import instaImg from "../assets/insta.png";
// import linkedinImg from "../assets/linkedin.png";
// import emailjs from "@emailjs/browser";
// const Contact = () => {
//   const form = useRef();
//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_xpagqbo", // your service ID
//         "template_XXXXXX", // your actual template ID (check EmailJS dashboard)
//         form.current,
//         "LGWs9Xej4KWSS8JbSM4-m" // your public key
//       )
//       .then(
//         () => {
//           console.log("SUCCESS!");
//         },
//         (error) => {
//           console.log("FAILED...", error.text);
//         }
//       );
//   };
//   return (
//     <section id="contactPage">
//       <div id="contact">
//         <h1 className="contactpageTitle">Contact Me</h1>
//         <span className="contactDesc">
//           Please fill the form below to discuss any work opportunities
//         </span>
//         <form action="" className="contactForm" ref={form} onSubmit={sendEmail}>
//           <input
//             type="text"
//             className="name"
//             placeholder="Enter your Name"
//             name="your_name"
//           />
//           <input
//             type="email"
//             className="email"
//             placeholder="Enter your email"
//             name="your_email"
//           />
//           <textarea
//             name="Message"
//             className="message"
//             rows="5"
//             placeholder="Your message"
//           ></textarea>
//           <button type="submit" value="Send" className="submitBtn">
//             Submit
//           </button>
//           <div className="links">
//             <a href="https://github.com/Afifa002">
//               <img src={gitImg} alt="Github" className="link" />
//             </a>
//             <a href="https://www.instagram.com/afifa3992/">
//               <img src={instaImg} alt="Insta" className="link" />
//             </a>
//             <a href="https://www.linkedin.com/in/afifa-hashmi-25a4a9226">
//               <img src={linkedinImg} alt="Linkedin" className="link" />
//             </a>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React, { useRef } from "react";
import "./Contact.css";
import gitImg from "../assets/github.png";
import instaImg from "../assets/insta.png";
import linkedinImg from "../assets/linkedin.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xpagqbo", // ✅ your service ID
        "template_kqhu0ta", // ✅ your correct template ID from EmailJS dashboard
        form.current,
        "JSSRRc0jK7YQhz7-F" // ✅ your public key
      )
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Message sent successfully!");
          form.current.reset(); // optional: clear form
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contactPage">
      <div id="contact">
        <h1 className="contactpageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill the form below to discuss any work opportunities
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Enter your Name"
            name="your_name"
            required
          />
          <input
            type="email"
            className="email"
            placeholder="Enter your email"
            name="your_email"
            required
          />
          <textarea
            name="message"
            className="message"
            rows="5"
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <a href="https://github.com/Afifa002">
              <img src={gitImg} alt="Github" className="link" />
            </a>
            <a href="https://www.instagram.com/afifa3992/">
              <img src={instaImg} alt="Insta" className="link" />
            </a>
            <a href="https://www.linkedin.com/in/afifa-hashmi-25a4a9226">
              <img src={linkedinImg} alt="Linkedin" className="link" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
