import React from 'react';
import './FourSteps.scss';
import decoration from "../../../images/decoration.png";

class FourSteps extends React.Component {
    render() {
        return (
            <section className="FourSteps_container">
                <h1 className="FourSteps_header">Wystarczą 4 proste kroki</h1>
                <figure>
                    <img className="App_header_decoration" src={decoration} alt="decoration" />
                </figure>
                <div className="FourSteps_box">
                    <div className="FourSteps_SmallBox">
                        <i className="fas fa-hands"></i>
                        <p>Wybierz rzeczy</p>
                        <span></span>
                        <p>ubrania, zabawki, sprzęt i inne</p>
                    </div>
                    <div className="FourSteps_SmallBox">
                        <i className="fas fa-hands"></i>
                        <p>Spakuj je</p>
                        <span></span>
                        <p>skorzystaj z worków na śmieci</p>
                    </div>
                    <div className="FourSteps_SmallBox">
                        <i className="fas fa-hands"></i>
                        <p>Zdecyduj komu chcesz pomóc</p>
                        <span></span>
                        <p>wybierz zaufane miejsce</p>
                    </div>
                    <div className="FourSteps_SmallBox">
                        <i className="fas fa-hands"></i>
                        <p>Zamów u kuriera</p>
                        <span></span>
                        <p>kurier przyjedzie w dogodnych terminie</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default FourSteps;