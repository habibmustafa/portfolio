import React, { useRef } from 'react'
import "./style.scss"
import emailjs from "@emailjs/browser"

const Contact = () => {
   const form = useRef()

   const sendEmail = (e) => {
      e.preventDefault()
      emailjs.sendForm('service_mffkcm4', 'template_jfsdgtb', form.current, '8kOeDcVnJ0N6Cw-5t')
         .then((result) => {
            console.log(result.text);
         }, (error) => {
            console.log(error.text);
         });
   }

   return (
      <div className='contact'>
         <div className="container">

            {/* contact form section */}
            <div className="contact-me">
               <div className='contact-title'>
                  <h1 className='h1-size'>Contact me</h1>
                  <p className="paragraph">
                     Egestas dui id ornare arcu odio. Ornare lectus sit amet est placerat in egestas erat imperdiet aenean vel elit scelerisque mauris pellentesque.
                  </p>
               </div>
               <div className="contact-form">
                  <form ref={form} onSubmit={sendEmail}>
                     <div className='contact-form-grid'>
                        <div className="input-wrapper">
                           <label htmlFor="name">Name</label>
                           <input placeholder='Full Name' type="text" name="name" id="name" required/>
                        </div>
                        <div className="input-wrapper">
                           <label htmlFor="email">Email Address</label>
                           <input placeholder='contact@you.com' type="email" name="email" id="email" required/>
                        </div>
                        <div className="input-wrapper">
                           <label htmlFor="phone">Phone</label>
                           <input placeholder='(+994) 51 600-2230' type="tel" name="phone" id="phone" required/>
                        </div>
                        <div className="input-wrapper">
                           <label htmlFor="subject">Subject</label>
                           <input placeholder='Ex. New Project' type="text" name="subject" id="subject" required/>
                        </div>

                        <div className="input-wrapper message">
                           <label htmlFor="message">Message</label>
                           <textarea placeholder="Please write your message..." name="message" id="message" rows="5" required></textarea>
                        </div>
                        <div className="input-wrapper button">
                           <input type="submit" value="Send Message" data-wait="Please wait..." />
                        </div>
                     </div>
                  </form>
               </div>

               <div className='contact-social'>
                  <div>
                     <a href='mailto:hebibullahmustafazade@gmail.com' className="email">
                        <img src="https://assets.website-files.com/61129bb2ecedf803564c68ec/6112a4fa0865622bd03376a4_email-icon-personal-x-template.svg" alt="mail" />
                        <div>me@gmail.com</div>
                     </a>
                  </div>
                  <div>
                     <a href="tel:+994516002230">
                        <img src="https://assets.website-files.com/61129bb2ecedf803564c68ec/6113f866488b09519c802b88_phone-icon-personal-x-webflow-template-brix-templates.svg" alt="tel" />
                        <div>(+994) 51 600-22-30</div>
                     </a>
                  </div>
               </div>

            </div>

            {/* contact questions section */}
            <div className="questions">

            </div>

         </div>
      </div>
   )
}

export default Contact