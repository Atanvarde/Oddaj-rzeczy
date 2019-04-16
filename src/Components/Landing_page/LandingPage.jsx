import React from 'react';
import './LandingPage.scss';
import Header from './Header/Header.jsx';
import Navigation from './Navigation/Navigation.jsx';

class LandingPage extends React.Component {
    render() {
        return (
            <div className="LandingPage_container">
                <Navigation/>
                <Header/>
            </div>
        )
    }
}

export default LandingPage;