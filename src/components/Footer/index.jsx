// Footer.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { StyledFooter } from './style'; // Importe o StyledFooter do seu arquivo style.js

const Footer = () => {
    return (
        <StyledFooter>
            <p>© 2024 Synapse. Todos os direitos reservados. <a href="https://www.instagram.com/ecofix.icev/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a></p>
        </StyledFooter>
    );
};

export default Footer;
