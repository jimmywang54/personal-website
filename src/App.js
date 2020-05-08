import React, { Component } from "react";
import "./App.css";

import { Route, Switch} from 'react-router-dom';


import Home from "./Components/Home";
import Bar from "./Components/Bar";
import About from "./Components/About";
import Portolio from "./Components/Portfolio";
import Contact from "./Components/Contact";

class App extends Component {
  render() {
    return (
        <div className="App">
          <Bar />
          <div className='container-routes'>
            <Switch>
              <Route exact path={['/', '/personal-website']} render={() => <Home />} />
              <Route exact path='/about' render={() => <About />} />
              <Route exact path='/portfolio' render={() => <Portolio />} />
              <Route exact path='/contact' render={() => <Contact />} />
            </Switch>
          </div>

        </div>
    );
  }
}

export default App;
