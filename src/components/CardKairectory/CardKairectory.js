import React from "react";
import "./CardKairectory.scss";
import PropTypes from 'prop-types';

class CardKairectory extends React.Component {
  render() {
    const{item}=this.props;
    return (
      <div className="directory__wrapper--card">
        <div className="card__wrapper">
          <h3 className="icon__title">{item}</h3>
          <div className="icon__container" >
            <i className="fas fa-chevron-right" />
          </div>
        </div>
      </div>
    )
  }
}

CardKairectory.propTypes = {
  item: PropTypes.string
}

export default CardKairectory;
