import React from 'react';
import '../components/Footer.css';
import { ReactComponent as Instagram } from '../assets/icons/instagram.svg';
import { ReactComponent as Facebook } from '../assets/icons/facebook.svg';

function Footer() {
    return (
        <div className='container'>
            <div className='footer'>
            <h4>Contact:</h4>
            <span>
                <Instagram />olivia_gabriela_dina
            </span>
            <span>
                <Facebook /> Olivia Gabriela Dina
            </span>

            </div>
        </div>
    );
}

export default Footer;
