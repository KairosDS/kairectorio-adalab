import React from "react";
import "./CardDetail.scss";
import PropTypes from 'prop-types';

class CardDetail extends React.Component {
  render() {
    const{title, description, url}= this.props;
    return (
      <div className="directory__wrapper--final">
          <div className="card__icon">
            <i className="far fa-clock" />
          </div>
          <p className="card__description">{description || 'No hay descripción'}</p>
        <a
          className="main__directory--link"
          target="_blank"
          rel="noopener noreferrer"
          href={url}
          title={`Ir a ${title}`}
        >
          Ir al recurso
        </a>
      </div>
    );
  }
}

CardDetail.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string
}

export default CardDetail;
