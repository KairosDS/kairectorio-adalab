import React from "react";
import "./CardKairectory.scss";


class CardKairectory extends React.Component {
  render() {
    const{item}=this.props;
    return (
      <div className="directory__wrapper--card">
        <div className="card__wrapper">
          <h3 className="kaire__title">{item}</h3>
          <div className="icon__container">
            <i className="fas fa-chevron-right" />
          </div>
        </div>
      </div>
    )
  }
}

  export default CardKairectory;