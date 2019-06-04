import React from 'react';
import {Link} from 'react-router-dom';
import './Resources.scss';

class Resources extends React.Component {
  componentDidMount() {
    const {match} = this.props;
    const category = match.params.category;
    this.props.fetchResources(category)
  }

  render(){
    const {kairos, laboral, desarrollo, agile, identifyCategory, match} = this.props;
    const category = match.params.category;
    const chooseCategory = () => {
      const {match} = this.props;
      const category = match.params.category;
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

    const chosenCategory = chooseCategory();
    return(
      <ul className="resources__list">
        {chosenCategory
        .filter(item => item.url !== '' ? item : false)
        .map((item,index) => {
          return (
          <li className="list__item" key={index}>
            <h2 className="title">{item.title}</h2>
            <p className="description">{item.description || 'No hay descripción'}</p>
            <Link className="btn__detail" to={`/card/${item.title}`} id={category} onClick={identifyCategory}>Más información</Link>
          </li>
          )
        })}
      </ul>
    )
  }
}

export default Resources;
