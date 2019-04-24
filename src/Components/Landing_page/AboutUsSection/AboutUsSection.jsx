import React from 'react';
import './AboutUsSection.scss';
import AboutUs from '../../../images/about.jpg';
import decoration from '../../../images/decoration.png';
import signature from '../../../images/signature.png';

class AboutUsSection extends React.Component {
    render() {
        return (
            <section className="AboutUsSection_cnt">
                <div className="AboutUsInfo_cnt">
                    <h1>O nas</h1>
                    <figure>
                        <img src={decoration} alt="decoration"></img>
                    </figure>
                    <p>Beetroot water spinach okra water chestnut ricebean pea catsear courgette summer purslane.
                        Water spinach arugula pea tatsoi aubergine spring onion bush.
                    </p>
                    <div className="Signature_box">
                        <figure>
                            <img className="Signature_img" src={signature} alt="signature"></img>
                        </figure>
                    </div>
                </div>
                <div className="AboutUsImg_cnt">
                    <img className="AboutUs_img" src={AboutUs} alt="People faces gathered in circle"></img>
                </div>
            </section>
        )
    }
}

export default AboutUsSection;