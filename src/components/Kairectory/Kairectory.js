import React from 'react';
import Resources from '../Resources/Resources';

class Kairectory extends React.Component {
    render() {
        const {db} = this.props;
        return (
            <ul className="list">
            {db.categories.map((item, index) => {
              return (
               <li className="list__item" key={index}>
                {item}
                <Resources db={db}/>
               </li>
              )})
              }
             </ul>
        );
    }
}
export default Kairectory; 