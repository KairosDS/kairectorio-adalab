import React from 'react';

class Kairectory extends React.Component {
    render() {
        const {db} = this.props;
        return (
          <div>
            <ul className="list">
            {db.categories.map((item, index) => {
              return (

               <li className="list__item" key={index}>
                 {item}
               </li>
              )})
              }
            </ul>
          </div>
        );
    }
}
export default Kairectory;
