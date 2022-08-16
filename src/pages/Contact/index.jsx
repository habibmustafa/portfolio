import React, { useState, useRef } from "react";
import "./style.scss";
import emailjs from "@emailjs/browser";
import { Faq } from "../../data/Faq";
import FaqItem from "./components/FaqItem";

const Contact = () => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [phone, setPhone] = useState("");
   const [subject, setSubject] = useState("");
   const [message, setMessage] = useState("");
   const [submitButton, setSubmitButton] = useState(false);
   const [sendMessage, setSendMessage] = useState(false);
   const form = useRef();

   const sendEmail = (e) => {
      e.preventDefault();
      setSubmitButton(true);

      emailjs
         .sendForm(
            "service_mffkcm4",
            "template_jfsdgtb",
            form.current,
            "8kOeDcVnJ0N6Cw-5t"
         )
         .then(
            (result) => {
               console.log(result.text);
               setSendMessage(true);
            },
            (error) => {
               console.log(error.text);
            }
         );
   };

   return (
      <div className="contact">
         <div className="container">
            {/* contact form section */}
            <div className="contact-me">
               <div
                  className="contact-title"
                  data-aos="fade-zoom-in"
                  data-aos-delay="100"
               >
                  <h1 className="h1-size">Contact me</h1>
                  <p className="paragraph">
                     I’m interested in freelance opportunities – especially
                     ambitious or enlightening projects. However, if you have
                     other request or question, don’t hesitate to use the form.
                  </p>
               </div>
               <div
                  className="contact-form"
                  data-aos="fade-zoom-in"
                  data-aos-delay="300"
               >
                  {!sendMessage ? (
                     <form ref={form} onSubmit={sendEmail}>
                        <div className="contact-form-grid">
                           <div className="input-wrapper">
                              <label htmlFor="name">Name *</label>
                              <input
                                 onChange={(e) => {
                                    setName(e.target.value);
                                 }}
                                 value={name}
                                 placeholder="Full Name"
                                 type="text"
                                 name="name"
                                 id="name"
                                 required
                              />
                           </div>
                           <div className="input-wrapper">
                              <label htmlFor="email">Email Address *</label>
                              <input
                                 onChange={(e) => {
                                    setEmail(e.target.value);
                                 }}
                                 value={email}
                                 placeholder="contact@you.com"
                                 type="email"
                                 name="email"
                                 id="email"
                                 required
                              />
                           </div>
                           <div className="input-wrapper">
                              <label htmlFor="phone">Phone</label>
                              <input
                                 onChange={(e) => {
                                    setPhone(e.target.value);
                                 }}
                                 value={phone}
                                 placeholder="(+994) 50 123-4567"
                                 type="tel"
                                 name="phone"
                                 id="phone"
                              />
                           </div>
                           <div className="input-wrapper">
                              <label htmlFor="subject">Subject</label>
                              <input
                                 onChange={(e) => {
                                    setSubject(e.target.value);
                                 }}
                                 value={subject}
                                 placeholder="Ex. New Project"
                                 type="text"
                                 name="subject"
                                 id="subject"
                              />
                           </div>

                           <div className="input-wrapper message">
                              <label htmlFor="message">Message *</label>
                              <textarea
                                 onChange={(e) => {
                                    setMessage(e.target.value);
                                 }}
                                 value={message}
                                 placeholder="Please write your message..."
                                 name="message"
                                 id="message"
                                 rows="5"
                                 required
                              ></textarea>
                           </div>
                           <div className="input-wrapper button">
                              <input
                                 type="submit"
                                 value={
                                    submitButton
                                       ? "Please wait..."
                                       : "Send Message"
                                 }
                                 data-wait="Please wait..."
                              />
                           </div>
                        </div>
                     </form>
                  ) : (
                     <div className="submitted">
                        <h2 className="h2-size">
                           Your message has been submitted.
                        </h2>
                        <img
                           src="https://assets.website-files.com/61129bb2ecedf803564c68ec/6112bdfb2b341387dfa368b4_portfolio-underline-personal-x-template.svg"
                           alt="line"
                        />
                        <p className="paragraph">
                           I will get back to you within 24-48 hours. Thanks for
                           getting in touch!..
                        </p>
                     </div>
                  )}
               </div>

               <div
                  className="contact-social"
                  data-aos="fade-zoom-in"
                  data-aos-offset="100"
               >
                  <div>
                     <a
                        href="mailto:hebibullahmustafazade@gmail.com"
                        className="email"
                     >
                        <img
                           src="https://assets.website-files.com/61129bb2ecedf803564c68ec/6112a4fa0865622bd03376a4_email-icon-personal-x-template.svg"
                           alt="mail"
                        />
                        <div>me@gmail.com</div>
                     </a>
                  </div>
                  <div>
                     <a href="tel:+994516002230">
                        <img
                           src="https://assets.website-files.com/61129bb2ecedf803564c68ec/6113f866488b09519c802b88_phone-icon-personal-x-webflow-template-brix-templates.svg"
                           alt="tel"
                        />
                        <div>(+994) 51 600-22-30</div>
                     </a>
                  </div>
               </div>
            </div>

            {/* contact questions section */}
            <div
               className="questions"
               data-aos="fade-zoom-in"
               data-aos-offset="300"
            >
               <div className="faq-title">
                  <h2 className="h2-size">Frequently Asked Questions</h2>
               </div>

               <div className="faq-items">
                  {Faq.map((item, i) => (
                     <FaqItem key={i} {...item} i={i} />
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default Contact;
