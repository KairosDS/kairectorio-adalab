import React from "react";
import { Link } from "react-router-dom";

class Kairectory extends React.Component {
  render() {
    const {categories} = this.props;
        return (
      <div>
        <ul className="list">
          {categories.map((item, index) => {
            return (
              <li className="list__item" key={index}>
                <Link to={`/resources/${item}`}>{item}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default Kairectory;
