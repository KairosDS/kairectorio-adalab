import React from "react";
import "./Card.scss";
import CardDetail from "../CardDetail";

class Card extends React.Component {
  render() {
    const { kairos, match } = this.props;
    const id = match.params.id;

    return (
      <div className="main__directory--wrapper">
        {kairos
          .filter(item => (item.title.includes(id) ? item : false))
          .map((item, index) => {
            return (
              <div className="card__container" key={index}>
                <h3 className="card__title">{item.title}</h3>
                <CardDetail
                  description={item.description}
                  url={item.url}
                />
              </div>
            );
          })}
      </div>
    );
  }
}

export default Card;
