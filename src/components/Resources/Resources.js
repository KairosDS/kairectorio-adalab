import React from 'react';
import {Link} from 'react-router-dom';
import './Resources.scss';

class Resources extends React.Component {
  render(){
    const {kairos} = this.props;

    return(
      <ul className="resources__list">
        {kairos.map((item,index) => {
          return(
            <li className="list__category" key={index}>
              <h2 className="title">{item.title}</h2>
              <Link className="btn__detail" to={`/card/${item.title}`}>Más información</Link>
            </li>
          )
        })}
      </ul>
    );
  }
}

export default Resources;