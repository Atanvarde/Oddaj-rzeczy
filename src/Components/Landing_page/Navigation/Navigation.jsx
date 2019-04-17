import React,{Component} from 'react';
import './Navigation.scss';

class Navigation extends React.Component {
    render() {
        return (
            <nav className="Nav_container">
                <ul className="Menu_list">
                    <li><a href="/">Start</a></li>
                    <li><a href="/ocochodzi">O co chodzi?</a></li>
                    <li><a href="/onas">O nas</a></li>
                    <li><a href="/fundacjeiorganizacje">Fundacje i organizacje</a></li>
                    <li><a href="/kontakt">Kontakt</a></li>
                </ul>
            </nav>
        )
    }
}

export default Navigation;