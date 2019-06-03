import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import { Route, Switch } from "react-router-dom";
import Kairectory from "./components/Kairectory/Kairectory";
import Resources from "./components/Resources/Resources";
import Card from "./components/Card/Card";

const db = {
  categories: ["kairos", "laboral", "desarrollo", "agile"],
  resources: {
    kairos: [
      {
        title: "calendario laboral",
        description: "Calendario laboral del año en curso",
        masinfo: "",
        url:
          "https://www.calendarioslaborales.com/calendario-laboral-madrid-2019.htm"
      },
      {
        title: "",
        description: "",
        masinfo: "",
        url: ""
      },
      {
        title: "",
        description: "",
        masinfo: "",
        url: ""
      }
    ],
    laboral: [
      {
        title: "",
        description: "",
        masinfo: "",
        url: ""
      }
    ],
    desarrollo: [
      {
        title: "",
        description: "",
        masinfo: "",
        url: ""
      }
    ],
    agile: [
      {
        title: "",
        description: "",
        masinfo: "",
        url: ""
      }
    ]
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }

  // fetchCategories () {
  //   const newUrl= url + 'categories';
  //   fetch(newUrl)
  //     .then(response => response.json())
  //     .then(data => {
  //       this.setState({
  //         categories : data
  //       })
  //     })
  // }

  // componentDidMount () {
  //   this.fetchCategories()
  // }

  render() {
    return (
      <div className="App">
        <Header />
        <main className="main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/kairectorio"
              render={props => <Kairectory db={db} />}
            />
            {
              <Route
                path="/kairectorio/recursos/:id-categoria"
                render={props => <Resources match={props.match} db={db} />}
              />
            }
            <Route
              path="/kairectorio/recursos/:id"
              render={props => <Card match={props.match} db={db} />}
            />{" "}
            */}
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
