import React from "react";
import "./Card.scss";
import CardDetail from "../CardDetail/CardDetail";
import BackButton from "../BackButton/BackButton";
import PropTypes from "prop-types";

class Card extends React.Component {
  render() {
    const {
      kairos,
      laboral,
      desarrollo,
      agile,
      match,
      chosenCategory,
      fetchResources
    } = this.props;
    const id = match.params.id;

    const chooseCategory = id => {
      if (id === "kairos") {
        return kairos;
      } else if (id === "laboral") {
        return laboral;
      } else if (id === "desarrollo") {
        return desarrollo;
      } else {
        return agile;
      }
    };

    const isCategory = chosenCategory => {
      if (chosenCategory !== "") {
        fetchResources(chosenCategory);
        const array = chooseCategory(chosenCategory);
        return array;
      } else {
        const array = [];
        return array;
      }
    };

    const array = isCategory(chosenCategory);

    return (
      <React.Fragment>
        <div className="nav__bar__container">
          <div className="nav__bar">
            <BackButton route={`/resources/${chosenCategory}`} />
          </div>
        </div>
        <div className="main__directory--wrapper">
          {array.length > 0 ? (
            array
              .filter(item => (item.title.includes(id) ? item : false))
              .map((item, index) => {
                return (
                  <div className="card__container--final" key={index}>
                    <h3 className="card__title">{item.title}</h3>
                    <CardDetail
                      description={item.description}
                      url={item.url}
                      title={item.title}
                      />
                  </div>
                );
              })
          ) : (
            <p>No hay datos</p>
          )}
        </div>
      </React.Fragment>
    );
  }
}

Card.propTypes = {
  kairos: PropTypes.array,
  laboral: PropTypes.array,
  desarrollo: PropTypes.array,
  agile: PropTypes.array,
  title: PropTypes.string,
  match: PropTypes.object,
  chosenCategory: PropTypes.string,
  fetchResources: PropTypes.func
};

export default Card;
