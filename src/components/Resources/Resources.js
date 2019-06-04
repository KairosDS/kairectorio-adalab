import React from 'react';
import './Resources.scss';
import CardResource from '../CardResource/CardResource';

class Resources extends React.Component {

  componentDidMount() {
    const {match} = this.props;
    const category = match.params.category;
    this.props.fetchResources(category)
  }

  render(){
    const {match} = this.props;
    const category = match.params.category;
    console.log(category)
    const {kairos, laboral, desarrollo, agile} = this.props;

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
    console.log(chosenCategory);
    return(
      <ul className="resources__list">
        {chosenCategory.map((item,index) => {
          return (
          <li key={index}>
            <CardResource title={item.title}/>
          </li>
          )
        })}
      </ul>
    )
  }
}

export default Resources;
