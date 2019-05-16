import React from 'react';
import './ContactSection.scss';
import decoration from '../../../images/decoration.png';
import ContactForm from './ContactForm/ContactForm.jsx';
import contactIcons from '../../../images/icons_contactsection.png';

class ContactSection extends React.Component {
    render() {
        return (
            <section className="ContactSection_container">
                <div className="ContactSection_header">
                    <h2>Skontaktuj się z nami</h2>
                    <figure>
                        <img src={decoration} alt="decoration"></img>
                    </figure>
                    <ContactForm/>
                </div>
                <figure>
                    <img className="contact-icons" src={contactIcons} alt = "facebook and telephone contact icons"></img>
                </figure>
                <footer>
                    <p>Copyright 2015 &copy; by Anna Dadej</p>
                </footer>
            </section>
        )
    }
}

export default ContactSection;