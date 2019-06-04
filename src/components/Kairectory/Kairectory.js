import React from "react";
import { Link } from "react-router-dom";
import "./Kairectory.scss";
import CardKairectory from "../CardKairectory";

class Kairectory extends React.Component {
  render() {
    const { categories } = this.props;
    return (
      <div>
        <ul className="category__list">
          {categories.map((item, index) => {
            return (
              <Link
                key={index}
                className="category__link"
                to={`/resources/${item}`}
              >
                <li>
                <CardKairectory item={item}/>
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
