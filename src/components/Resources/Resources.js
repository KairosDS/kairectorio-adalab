import React from 'react';

class Resources extends React.Component {
  render(){
    const {db, match} = this.props;
    console.log(match.params);

    return(
      <ul className="resources__list">
        {db.resources.kairos.map(item => {
          return(
            <li className="list__item">
              <h2 className="title">{item.title}</h2>
              <p className="description">{item.description}</p>
              <a href={item.url} className="button">{item.url}</a>
            </li>
          )
        })}
      </ul>
    );
  }
}

export default Resources;