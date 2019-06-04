import React from "react";
import { Link } from "react-router-dom";
import "./Kairectory.scss";

class Kairectory extends React.Component {
  render() {
    const {categories} = this.props;
        return (
      <div>
        <ul className="list">
          {categories.map((item, index) => {
            return (
              <Link key={index} className="category__link" to={`/resources/${item}`}>
                <li className="list__item" >
                  <h3 className="kaire__title">{item}</h3>
                  <div className="icon__container">
                    <i className="fas fa-chevron-right"></i>                  
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default Kairectory;
