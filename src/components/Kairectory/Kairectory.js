import React from 'react';

class Kairectory extends React.Component {
    render() {
        const {db} = this.props;
        return (
            <ul className="list">
            {db.categories.map((item, index) => {
              return (
               <li className="list__item" key={index}>
                 {item}
               </li>
              )})
              }
             </ul>
        );
    }
}
export default Kairectory; 