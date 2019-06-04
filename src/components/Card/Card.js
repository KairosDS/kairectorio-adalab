import React from "react";
import "./Card.scss";
import CardDetail from "../CardDetail/CardDetail";

class Card extends React.Component {
  render () {
    const {kairos, laboral, desarrollo, agile, match, chosenCategory} = this.props;

    const id = match.params.id;

    const chooseCategory = (category) => {
      if(category === 'kairos') {
        return kairos;
      } else if (category === 'laboral'){
        return laboral;
      } else if (category === 'desarrollo'){
        return desarrollo;
      } else {
        return agile;
      }
    }
    const array = chooseCategory(chosenCategory);

    return (
      <div className="main__directory--wrapper">
        {array
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
