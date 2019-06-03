import React from 'react';
import Resources from '../Resources/Resources';
import './Kairectory.scss';

class Kairectory extends React.Component {
    render() {
        const {categories, kairos} = this.props;
        return (
          <div>
            <ul className="list">
            {categories.map((item, index) => {
              return (

               <li className="list__item" key={index}>
                {item}
                <Resources kairos={kairos}/>
               </li>
              )})
              }
            </ul>
          </div>
        );
    }
}
export default Kairectory;
