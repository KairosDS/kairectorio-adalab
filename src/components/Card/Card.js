import React from 'react';

class Card extends React.Component {
  render () {
    const {db} = this.props;
    return (
      <div>
      {db.resources.kairos.map((item, index) => {
        return (
          <article className="directory__wrapper--card" key={index}>
            <a className="main__directory--link" target="_blank" href={item.url}>
              <div className="card__wrapper">
                <div className="card__icon">
                  <i className="far fa-clock"></i>
                </div>
                <h3 className="card__title">
                {item.title}
                </h3>
                <p className="card__description">
                {item.description}
                </p>
              </div>
            </a>
        </article>

        )
      })}
      </div>
    )
  }
}

export default Card;
