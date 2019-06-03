import React from 'react';
import './Resources.scss';

class Resources extends React.Component {
  render(){
    const {kairos, match} = this.props;
    const idCategory = match.params;


    return(
      <p>Hola</p>
      // <ul className="resources__list">
      //   {kairos.map((item,index) => {
      //     return(
      //       <li className="list__item" key={index}>
      //         <h2 className="title">{item.title}</h2>
      //         <p className="description">{item.description}</p>
      //         <a href={item.url} className="button">{item.url}</a>
      //       </li>
      //     )
      //   })}
      // </ul>
    );
  }
}

export default Resources;