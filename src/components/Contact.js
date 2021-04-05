import React from 'react';
import {FaLinkedin, FaFacebook, FaGithub} from 'react-icons/fa';

const Contact = () => {
  return(
    <section id="contact" className="contact">
      <img src="/images/contact.jpg" alt="" className="contact__bg-image"/>
      <h2 className="contact__title">Contact me</h2>
      <form action="https://formsubmit.co/inesbarataborges@gmail.com" method="POST">
        <div className="contact__container">
          <input type="email" name="email" placeholder="Email Address" required />
          <textarea name="message" cols="30" rows="6" placeholder="Write your message here" required></textarea>
          <input type="hidden" name="_subject" value="New email!" />
          <button type="submit">Send</button>
        </div>
      </form>
      <div className="contact__social-links">
        <ul>
          <li><a href="https://github.com/Ines95Borges" target="_blank"><FaGithub size={40}/></a></li>
          <li><a href="https://www.facebook.com/inesbarataborges" target="_blank"><FaFacebook size={40} /></a></li>
          <li><a href="https://www.linkedin.com/in/inesbfb/" target="_blank"><FaLinkedin size={40} /></a></li>
        </ul>
      </div>
    </section>
  )
}

export default Contact;