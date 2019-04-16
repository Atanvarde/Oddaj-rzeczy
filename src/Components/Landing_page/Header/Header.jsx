import React from 'react';
import './Header.scss';
import decoration from '../../../images/decoration.png';

class Header extends React.Component {
    render() {
        return (
            <div>
                <header className="App_header">
                    <p>Zacznij pomagać!</p>
                    <p>Oddaj niechciane rzeczy w zaufane ręce</p>
                    <figure>
                        <img className="App_header_decoration" src={decoration} alt="decoration" />
                    </figure>
                </header>
            </div>
        );
    }
}

export default Header;