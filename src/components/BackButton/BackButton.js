import React from 'react';
import {Link} from 'react-router-dom';

class backButton extends React.Component {
    render () {
        const {route} = this.props;
        return(
            <Link to={route}>Volver</Link>
        );
    }
}

export default backButton;