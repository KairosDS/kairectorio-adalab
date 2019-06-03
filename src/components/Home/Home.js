import React from "react";
import './Home.scss';
import Kairectory from "../Kairectory/Kairectory";


class Home extends React.Component {
  render() {
    const {categories} = this.props;
    return (
      <div className="home">
        <section className="main__hero">
          <div className="main__hero--wrapper">
            <h1 className="wrapper__motto">#IT'S YOUR TIME</h1>
            <h2 className="wrapper__description">
              Kairectorio, acceso rápido a tus enlaces más usados
            </h2>
          </div>
        </section>
        <section className="main__directory">
          <Kairectory categories={categories} />
        </section>
      </div>
    );
  }
}

export default Home;
