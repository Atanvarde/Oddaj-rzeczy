import React from 'react';
import './YellowSection.scss';

class YellowSection extends React.Component {
    render() {
        return (
            <section className="Statistic_container">
                <div className="Yellow_ctn">
                    <h1 className="Yellow_ctn_quantity">10</h1>
                    <h2 className="Yellow_ctn_header">ODDANYCH WORKÓW</h2>
                    <p className="Yellow_ctn_description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eos est hic illum laboriosam magnam provident recusandae reiciendis rem, reprehenderit!</p>
                </div>
                <div className="Yellow_ctn">
                    <h1 className="Yellow_ctn_quantity">5</h1>
                    <h2 className="Yellow_ctn_header">WSPARTYCH ORGANIZACJI</h2>
                    <p className="Yellow_ctn_description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eos est hic illum laboriosam magnam provident recusandae reiciendis rem, reprehenderit!</p>
                </div>
                <div className="Yellow_ctn">
                    <h1 className="Yellow_ctn_quantity">7</h1>
                    <h2 className="Yellow_ctn_header">ZORGANIZOWANYCH ZBIÓREK</h2>
                    <p className="Yellow_ctn_description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eos est hic illum laboriosam magnam provident recusandae reiciendis rem, reprehenderit!</p>
                </div>
            </section>
        )
    }
}

export default YellowSection;