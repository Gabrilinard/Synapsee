import React from 'react';
import { StyledFooter } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <StyledFooter>
            <p>© 2024 Ecoflix. Todos os direitos reservados.<a href="https://www.instagram.com/ecofix.icev/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a></p>
            
        </StyledFooter>
    );
};

export default Footer;