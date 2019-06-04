import React from "react";
import { Link } from "react-router-dom";
import "./Kairectory.scss";

class Kairectory extends React.Component {
  render() {
    const { categories } = this.props;
    return (
      <div>
        <ul className="list">
          {categories.map((item, index) => {
            return (
              <li className="list__item" key={index}>
                <Link className="category__link" to={`/resources/${item}`}>
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default Kairectory;
