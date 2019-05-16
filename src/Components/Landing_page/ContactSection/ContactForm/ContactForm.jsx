import React from 'react';
import './ContactForm.scss';

class ContactForm extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            name:'',
            email:'',
            message:''
        };
    }

    handleNameChange = (event) => {
        this.setState( {
            name: event.target.value
        });
    };

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        });
    };

    handleMessageChange = (event) => {
        this.setState({
            message: event.target.value
        });
    };


    render() {
        return (
            <div className="container">
                <h1 className="form__header">FORMULARZ KONTAKTOWY</h1>
                <form className="container__contactForm">
                    <label>
                        Imię
                        <input type="text" value={this.state.name} onChange={this.handleNameChange}/>
                        <hr></hr>
                    </label>
                    <label>
                        Email
                        <input type="email" value={this.state.email} onChange={this.handleEmailChange} />
                        <hr></hr>
                    </label>
                    <label>
                        Wiadomość
                        <input type="text" value={this.state.message} onChange={this.handleMessageChange}/>
                        <hr></hr>
                    </label>
                    <div className="button_submit__container">
                        <input className="button__submit" type="submit" value="Wyślij" />
                    </div>
                </form>
            </div>
        );
    }
}

export default ContactForm;