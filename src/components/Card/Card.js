import React from 'react';
import './Card.scss';

class Card extends React.Component {

  render () {
    const {kairos, laboral, desarrollo, agile, match, chosenCategory} = this.props;
    const id = match.params.id;
    console.log(id);

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
    console.log(array);

    return (
      <div className="main__directory--wrapper">
      {array
        .filter(item => item.title.includes(id) ? item : false)
        .map((item, index) => {
          return (
            <div className="card__container" key={index}>
              <h3 className="card__title">{item.title}</h3>
              <article className="directory__wrapper--card" key={index}>
                  <div className="card__wrapper">
                    <div className="card__icon">
                      <i className="far fa-clock"></i>
                    </div>
                    <p className="card__description">{item.description}</p>
                  </div>
                  <a className="main__directory--link" target="_blank" rel="noopener noreferrer" href={item.url}>{item.url}</a>
              </article>
            </div>
        )
      })}
      </div>
    )
  }
}

export default Card;
