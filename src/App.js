import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from "./components/Home/Home";




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      kairos: []
    }
  }

  fetchCategories () {
    const url = 'http://localhost:4000/';
    const newUrl= url + 'categories';
    console.log(newUrl);
    fetch(newUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({
          categories : data
        })
        console.log(this.state.categories);
      })
  }

  fetchResourcesKairos() {
    const url = 'http://localhost:4000/';

    const newUrl= url + 'resources/kairos';
    console.log(newUrl);
    fetch(newUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({
          kairos : data
        })
        console.log(this.state.kairos);
      })

  }

  componentDidMount () {
    this.fetchCategories();
    this.fetchResourcesKairos()
  }

  render() {
    const {categories, kairos}= this.state;
    return (
      <div className="App">
        <Header />
        <Home categories={categories} kairos= {kairos} />
        <Footer />
      </div>
    );
  }
}

export default App;
