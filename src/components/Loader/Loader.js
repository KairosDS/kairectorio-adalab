import React from 'react';
import logoKairos from './smallLogo.png';
import './Loader.scss';

class Loader extends React.Component {
    render() {
        return (
        <React.Fragment>
        <div className= "loader__wrapper">
            <img src={logoKairos} alt="Kairos Logo" className="loader__img" />
            <p className="loader__text">Cargando recursos...</p>
        </div>
        </React.Fragment>
        )
    }
}

export default Loader;