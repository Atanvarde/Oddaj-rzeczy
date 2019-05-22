import React from 'react';
import './FourSteps.scss';
import decoration from "../../../images/decoration.png";
import SetUpAccountBtn from "./SetUpAccountBtn/SetUpAccountBtn";
import ICON1 from "../../../images/ICON1.png";
import ICON2 from "../../../images/ICON2.png";
import ICON3 from "../../../images/ICON3.png";
import ICON4 from "../../../images/ICON4.png";

class FourSteps extends React.Component {
    render() {
        return (
            <section className="FourSteps_container">
                <h1 className="FourSteps_header">Wystarczą 4 proste kroki</h1>
                <figure>
                    <img className="App_header_decoration" src={decoration} alt="" />
                </figure>
                <div className="FourSteps_box">
                    <div className="FourSteps_SmallBox">
                        <img src={ICON1} alt="hands_icon"></img>
                        <p>Wybierz rzeczy</p>
                        <hr></hr>
                        <span>ubrania, zabawki,</span>
                        <span>sprzęt i inne</span>
                    </div>
                    <div className="FourSteps_SmallBox">
                        <img src={ICON2} alt="arrow_down_icon"></img>
                        <p>Spakuj je</p>
                        <hr></hr>
                        <span>skorzystaj z worków</span>
                        <span>na śmieci</span>
                    </div>
                    <div className="FourSteps_SmallBox">
                        <img src={ICON3} alt="glasses"></img>
                        <p>Zdecyduj komu</p>
                        <p>chcesz pomóc</p>
                        <hr></hr>
                        <span>wybierz zaufane</span>
                        <span>miejsce</span>
                    </div>
                    <div className="FourSteps_SmallBox">
                        <img src={ICON4} alt="courier_icon"></img>
                        <p>Zamów kuriera</p>
                        <hr></hr>
                        <span>kurier przyjedzie</span>
                        <span>w dogodnym terminie</span>
                    </div>
                </div>
                <SetUpAccountBtn/>
            </section>
        )
    }
}

export default FourSteps;