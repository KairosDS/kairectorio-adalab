import React from 'react';
import logoKairos from '../../img/kairosLogo.png';

class Loader extends React.Component {
    render() {
        return (
        <React.Fragment>
        <img src={logoKairos} alt="Kairos Logo" className="loader__img" />
        <p className="loader__text">Cargando recursos...</p>
        </React.Fragment>
        )
    }
}

export default Loader;