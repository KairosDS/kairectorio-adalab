import React from 'react';
import {Link} from 'react-router-dom';
import './Resources.scss';

class Resources extends React.Component {
  render(){
    const {kairos} = this.props;
    console.log('hola');

    return(
      <ul className="resources__list">
        {kairos.map((item,index) => {
          return(
            <li className="list__item" key={index}>
              <h2 className="title">{item.title}</h2>
              <p className="description">{item.description}</p>
              <Link className="btn__detail" to={`/card/${item.title}`}>Pincha aquí para más información</Link>
            </li>
          )
        })}
      </ul>
    );
  }
}

export default Resources;