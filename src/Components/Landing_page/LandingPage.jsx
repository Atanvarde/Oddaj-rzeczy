import React from 'react';
import './LandingPage.scss';
import Header from './Header/Header.jsx';
import Navigation from './Navigation/Navigation.jsx';
import YellowSection from "./YellowSection/YellowSection";
import FourSteps from "./FourStepsSection/FourSteps";
import AboutUsSection from "./AboutUsSection/AboutUsSection";
import FoundationListSection from "./FoundationListSection/FoundationListSection";

class LandingPage extends React.Component {
    render() {
        return (
            <div className="LandingPage_container">
                <Navigation/>
                <Header/>
                <YellowSection/>
                <FourSteps/>
                <AboutUsSection/>
                <FoundationListSection/>
            </div>
        )
    }
}

export default LandingPage;