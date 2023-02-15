import React from 'react';
import "./Footer.scss"
function Footer(props) {
    return (
        <div className="Footer">
            <div className="Footer-info">
                <p>Moonshine St. 14-05 Light City</p>
                <a href="tel:+00(123)4567890">/ T. +00 (123) 456 78 90</a>
                <a href="mailto:tfirst.last@email.com">/ first.last@email.com</a>
            </div>
<h4>2023 &copy;</h4>
        </div>
    );
}


Footer.defaultProps = {
    className: '',
};
export default Footer;