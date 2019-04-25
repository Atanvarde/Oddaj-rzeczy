import React from 'react';
import './ContactSection.scss';
import decoration from '../../../images/decoration.png';
import ContactForm from './ContactForm/ContactForm.jsx';

class ContactSection extends React.Component {
    render() {
        return (
            <section className="ContactSection_container">
                <div className="ContactSection_header">
                    <h2>Skontaktuj się z nami</h2>
                    <figure>
                        <img src={decoration} alt="decoration"></img>
                    </figure>
                </div>
                <ContactForm/>
            <footer>
                <p>Copyright 2015 &copy; by Anna Dadej</p>
            </footer>
            </section>
        )
    }
}

export default ContactSection;