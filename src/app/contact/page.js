import React from 'react';
import ContactCard from "@/app/components/ContactCard";
import  styles from "./contact.module.css"
import ContactForm from "@/app/components/ContactForm";

const Contact = () => {
    return (
        <>
            <div className={styles.container}>
          <h1>Contact Us</h1>
            <ContactCard />
                  <section className={styles.contact_section}>
                      <h2>We'd love to hear <span>from you</span></h2>
                      <ContactForm />
                  </section>
            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.7173104615913!2d73.3634204!3d22.2886958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fda2400192473%3A0xc319c9237f2928e8!2sParul%20University!5e0!3m2!1sen!2sin!4v1682815459640!5m2!1sen!2sin"
                width={600} height="450" style={{border:0}} allowFullScreen="" loading="lazy" className={styles.mapping}
                referrerPolicy="no-referrer-when-downgrade"></iframe>
        </>
    );
};

export default Contact;