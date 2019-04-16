import React from 'react';
import './Navigation.scss';

class Navigation extends React.Component {
    render() {
        return (
            <nav className="Nav_container">
                <ul className="Menu_list">
                    <li><a href="">Start</a></li>
                    <li><a href="">O co chodzi?</a></li>
                    <li><a href="">O nas</a></li>
                    <li><a href="">Fundacje i organizacje</a></li>
                    <li><a href="">Kontakt</a></li>
                </ul>
            </nav>
        )
    }
}

export default Navigation;