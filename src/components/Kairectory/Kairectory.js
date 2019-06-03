import React from "react";
import { Link } from "react-router-dom";

class Kairectory extends React.Component {
  render() {
    const { db } = this.props;
    console.log(db);
    return (
      <div>
        <ul className="list">
          {db.categories.map((item, index) => {
            return (
              <li className="list__item" key={index}>
                <Link to={`/kairectorio/recursos/${item}`}>{item}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default Kairectory;
