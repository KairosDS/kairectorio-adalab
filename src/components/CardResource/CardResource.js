import React from 'react';
import './CardResource.scss';
import {Link} from 'react-router-dom';

class CardResource extends React.Component{

  render(){
    const {title, category, identifyCategory} = this.props;
    return(
      <div className="directory__wrapper--card">
        <div className="card__wraper__space">
          <h2 className="title">{title}</h2>
          <Link className="btn__detail" to={`/card/${title}`} id={category} onClick={identifyCategory}>Más información</Link>
        </div>
      </div>   
    );
  }
}

export default CardResource;