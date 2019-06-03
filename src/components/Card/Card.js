import React from 'react';
import './Card.scss';

class Card extends React.Component {
  render () {
    const {kairos, match} = this.props;
    const id = match.params.id;

    return (
      <div className="main__directory--wrapper">
      {kairos
        .filter(item => item.title.includes(id) ? item : false)
        .map((item, index) => {
          return (
            <div className="card__container">
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
