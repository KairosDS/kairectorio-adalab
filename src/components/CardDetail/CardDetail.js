import React from "react";
import "./CardDetail.scss";

class CardDetail extends React.Component {
  render() {
    const{description, url}= this.props;
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
        >
          {url}
        </a>
      </div>
    );
  }
}

export default CardDetail;
