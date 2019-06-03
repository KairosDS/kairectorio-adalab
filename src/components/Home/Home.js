import React from "react";
import Kairectory from "../Kairectory/Kairectory";
import './Home.scss';


class Home extends React.Component {
  render() {
    const { categories, kairos } = this.props;
    return (
      <main className="main">
        <section className="main__hero">
          <div className="main__hero--wrapper">
            <h1 className="wrapper__motto">#IT'S YOUR TIME</h1>
            <h2 className="wrapper__description">
              Kairectorio, acceso rápido a tus enlaces más usados
            </h2>
          </div>
        </section>
        <section className="main__directory">
          <Kairectory categories={categories} kairos= {kairos} />
        </section>
      </main>
    );
  }
}

export default Home;
