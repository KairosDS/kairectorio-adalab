import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class backButton extends React.Component {
    render () {
        const {route} = this.props;
        return(
            <Link to={route} title="Volver atrás"><i className="fas fa-arrow-left"></i> Volver</Link>
        );
    }
}

backButton.propTypes = {
  route: PropTypes.string
};

export default backButton;
