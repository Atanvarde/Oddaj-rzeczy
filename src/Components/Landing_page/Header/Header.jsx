import React from 'react';
import './Header.scss';
import decoration from '../../../images/decoration.png';
import MainBtn1 from "./MainBtn1/MainBtn1";
import MainBtn2 from "./MainBtn2/MainBtn2";
import LoginBtn from "./LoginBtn/LoginBtn";
import RegisterBtn from "./RegisterBtn/RegisterBtn";
import Navigation from "./Navigation/Navigation";

class Header extends React.Component {
    render() {
        return (
            <div className="App_header_container">
                <div className="LoginRegister_cnt">
                    <LoginBtn/>
                    <RegisterBtn/>
                </div>
                <Navigation/>
                <header className="App_header">
                    <div className="App_header_box">
                        <p>Zacznij pomagać!</p>
                        <p>Oddaj niechciane rzeczy w zaufane ręce</p>
                        <figure>
                            <img className="App_header_decoration" src={decoration} alt="decoration" />
                        </figure>
                    </div>
                    <div className="MainButtons_container">
                        <MainBtn1/>
                        <MainBtn2/>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;