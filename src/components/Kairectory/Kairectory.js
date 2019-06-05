import React from "react";
import { Link } from "react-router-dom";
import "./Kairectory.scss";
import CardKairectory from "../CardKairectory/CardKairectory";
import PropTypes from 'prop-types';

class Kairectory extends React.Component {
  render() {
    const { categories } = this.props;
    return (
      <div>
        <ul className="category__list">
          {categories.map((item, index) => {
            return (
              <Link
                title={`Ir a ${item}`}
                key={index}
                className="category__link"
                to={`/resources/${item}`}
              >
                <li>
                  <CardKairectory
                    item={item}
                    />
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    );
  }
}

Kairectory.propTypes = {
  categories: PropTypes.array
}

export default Kairectory;
