import React from 'react';
import './FoundationListData.scss';

class FoundationListData extends React.Component {
    render() {
        return (
            <div className="container__foundation">
                <div className="container__foundation--box1">
                    <h4 className="header__foundation--title">Fundacja "Dbam o Zdrowie"</h4>
                    <p class="text__foundation--aim">Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                    <hr></hr>
                    <h4 className="header__foundation--title">Fundacja "Dla Dzieci"</h4>
                    <p className="text__foundation--aim">Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                    <hr></hr>
                    <h4 className="header__foundation--title">Fundacja "Bez Domu"</h4>
                    <p className="text__foundation--aim">Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
                    <hr></hr>
                </div>
                <div className="container__foundation--box2">
                    <p className="text__foundation--items">ubrania, jedzenie, sprzęt AGD,meble, zabawki</p>
                    <hr></hr>
                    <p className="text__foundation--items">ubrania, meble, zabawki</p>
                    <hr></hr>
                    <p className="text__foundation--items">ubrania, jedzenie, ciepłe koce</p>
                    <hr></hr>
                </div>
            </div>
        )
    }
}

export default FoundationListData;