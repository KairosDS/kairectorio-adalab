import React from 'react';
import Resources from '../Resources/Resources';
import './Kairectory.scss';

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
                <Resources db={db}/>
               </li>
              )})
              }
            </ul>
          </div>
        );
    }
}
export default Kairectory;
