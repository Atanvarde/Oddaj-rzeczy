import React from 'react';
import './FoundationListSection.scss';
import decoration from '../../../images/decoration.png';

class FoundationListSection extends React.Component {
    render() {
        return (
            <section className="FoundationList_container">
                <div className="FoundationList_box">
                    <h1>Komu pomagamy?</h1>
                    <figure>
                        <img src={decoration} alt="decoration"></img>
                    </figure>
                </div>
                <div className="FoundationMenu_list_container">
                    <ul className="FoundationMenu_list">
                        <li><a href="/fundacje">Fundacjom</a></li>
                        <li><a href="/organizacjepozarzadowe">Organizacjom pozarządowym</a></li>
                        <li><a href="/lokalnezbiorki">Lokalnym zbiórkom</a></li>
                    </ul>
                </div>
                <div className="FoundationList">
                    <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz
                        sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
                    </p>
                </div>
            </section>
        )
    }
}

export default FoundationListSection;