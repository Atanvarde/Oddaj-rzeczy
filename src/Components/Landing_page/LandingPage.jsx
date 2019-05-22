import React from 'react';
import './LandingPage.scss';
import Header from './Header/Header.jsx';
import YellowSection from "./YellowSection/YellowSection.jsx";
import FourStepsSection from "./FourStepsSection/FourSteps.jsx";
import AboutUsSection from "./AboutUsSection/AboutUsSection.jsx";
import FoundationListSection from "./FoundationListSection/FoundationListSection.jsx";
import ContactSection from "./ContactSection/ContactSection.jsx";


class LandingPage extends React.Component {

    render() {
        return (
            <div className="LandingPage_container">
                <Header/>
                <YellowSection/>
                <FourStepsSection/>
                <AboutUsSection/>
                <FoundationListSection/>
                <ContactSection/>
            </div>
        )
    }
}

export default LandingPage;