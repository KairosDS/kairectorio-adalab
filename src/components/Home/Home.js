import React from "react";
import './Home.scss';
import Kairectory from "../Kairectory/Kairectory";
import PropTypes from 'prop-types';
import Loader from '../Loader/Loader';

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
          {categories.isLoading === true 
          ?
            <Loader />
          :
            <Kairectory categories={categories.data} />
        }
        </section>
      </div>
    );
  }
}

Home.propTypes = {
  categories: PropTypes.object
}

export default Home;
