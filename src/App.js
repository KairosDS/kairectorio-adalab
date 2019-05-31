import React from 'react';
import './App.scss';
import Kairectory from './components/Kairectory/kairectory';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


const db = {
  "categories": ["kairos", "laboral", "desarrollo", "agile"],
  "resources": {
    "kairos":[
      {
        "title": "calendario laboral",
        "description": "Calendario laboral del año en curso",
        "masinfo": "",
        "url": "https://www.calendarioslaborales.com/calendario-laboral-madrid-2019.htm"
      },
      {
        "title": "",
        "description": "",
        "masinfo": "",
        "url": ""
      },
      {
        "title": "",
        "description": "",
        "masinfo": "",
        "url": ""
      }
    ],
    "laboral": [
      {
        "title": "",
        "description": "",
        "masinfo": "",
        "url": ""
      }
    ],
    "desarrollo": [
      {
        "title": "",
        "description": "",
        "masinfo": "",
        "url": ""
      }
    ],
    "agile": [
      {
        "title": "",
        "description": "",
        "masinfo": "",
        "url": ""
      }
    ]
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    }
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
        <Kairectory db={db} />
        <Footer />
      </div>
    );
  }
}

export default App;
