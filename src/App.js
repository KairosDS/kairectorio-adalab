import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import { Route, Switch } from "react-router-dom";
import Resources from "./components/Resources/Resources";
import Card from "./components/Card/Card";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      kairos: [],

    };
  }

  fetchCategories() {
    const url = "http://localhost:4000/";
    const newUrl = url + "categories";
    fetch(newUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({
          categories: data
        });
      });
  }

  fetchResourcesKairos() {
    const url = "http://localhost:4000/";

    const newUrl = url + "resources/kairos";
    fetch(newUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({
          kairos: data
        });
      });
  }

  componentDidMount() {
    this.fetchCategories();
    this.fetchResourcesKairos();
  }

  render() {
    const { categories, kairos } = this.state;
    return (
      <div className="App">
        <Header />
        <main className="main">
          <Switch>
            <Route
              exact path="/"
              render={() => (
                <Home categories={categories}/>
              )}
            />
              <Route
                path="/resources/:category"
                render={props => (
                  <Resources
                    match={props.match}
                    categories={categories}
                    kairos={kairos}
                  />
                )}
              />
            <Route
              path="/card/:id"
              render={props => (
                <Card
                  match={props.match}
                  categories={categories}
                  kairos={kairos}
                />
              )}
            />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
