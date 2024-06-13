// src/App.jsx
import React from 'react';
import Mapa from '../../components/Mapa';
import Header from '../../components/Header';
import {StyledMapa} from "./style"

const MapaCont = () => {
    return (
        <>
            <Header />
            <div>
                <Mapa />
            </div>

        </>
    );
};

export default MapaCont;
