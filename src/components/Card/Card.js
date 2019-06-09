import React from "react";
import "./Card.scss";
import CardDetail from "../CardDetail/CardDetail";
import BackButton from "../BackButton/BackButton";
import PropTypes from "prop-types";

class Card extends React.Component {
  constructor() {
    super();
    this.array = []; // creo las propiedades de la clase
  }

  chooseCategory(id) {
    if (id === "kairos") {
      return this.props.kairos;
    } else if (id === "laboral") {
      return this.props.laboral;
    } else if (id === "desarrollo") {
      return this.props.desarrollo;
    } else {
      return this.props.agile;
    }
  }

  isCategory(chosenCategory) {
    if (chosenCategory !== "") {
      this.props.fetchResources(chosenCategory);
      const array = this.chooseCategory(chosenCategory);
      console.log("categoria", chosenCategory);
      return array;
    } else {
      const array = [];
      console.log("no tengo categoria");
      return array;
    }
  }

  componentDidMount() {
    this.array = this.isCategory(this.props.chosenCategory);
  }

  render() {
    const { match, chosenCategory } = this.props;
    const id = match.params.id;

    return (
      <React.Fragment>
        <div className="nav__bar__container">
          <div className="nav__bar">
            <BackButton route={`/resources/${chosenCategory}`} />
          </div>
        </div>
        <div className="main__directory--wrapper">
          {this.array.length > 0 ? (
            this.array
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
