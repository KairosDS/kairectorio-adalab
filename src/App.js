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
      laboral: [],
      desarrollo: [],
      agile: [],
      chosenCategory: ''

    };
    this.fetchResources = this.fetchResources.bind(this);
    this.identifyCategory = this.identifyCategory.bind(this);
  }

  saveCategory(category) {
    localStorage.setItem('category', category);
  }

  identifyCategory(event) {
    const category = event.currentTarget.id;
    this.setState({chosenCategory: category});
    this.saveCategory(category);
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

  fetchResources(category) {
    const url = "http://localhost:4000/";
    const resources = "resources/";
    const newUrl = url + resources + category;
    fetch(newUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({
          [category] : data
        });
      });
  }

  componentDidMount() {
    this.fetchCategories();
    const category = localStorage.getItem('category') || '';
    this.setState({chosenCategory: category});
  }

  render() {
    const { categories, kairos, laboral, desarrollo, agile, chosenCategory } = this.state;
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
                    fetchResources = {this.fetchResources}
                    match={props.match}
                    categories={categories}
                    kairos={kairos}
                    laboral={laboral}
                    desarrollo={desarrollo}
                    agile={agile}
                    identifyCategory={this.identifyCategory}
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
                  laboral={laboral}
                  desarrollo={desarrollo}
                  agile={agile}
                  chosenCategory={chosenCategory}
                  fetchResources={this.fetchResources}
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
