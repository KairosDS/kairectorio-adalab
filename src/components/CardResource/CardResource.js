import React from 'react';
import './CardResource.scss';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class CardResource extends React.Component{

  render(){
    const {title, category, identifyCategory} = this.props;
    return(
      <div className="directory__wrapper--card">
        <div className="card__wraper__space">
          <h2 className="title">{title}</h2>
          <Link
            className="btn__detail"
            to={`/card/${title}`}
            id={category}
            title={`Ir a ${title}`}
            onClick={identifyCategory}>Más información
          </Link>
        </div>
      </div>
    );
  }
}

CardResource.propTypes = {
  title: PropTypes.string,
  category: PropTypes.string,
  identifyCategory: PropTypes.func
};

export default CardResource;
