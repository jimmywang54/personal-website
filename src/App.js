import React, { Component } from "react";
import "./App.css";

import Card from './Components/Card';

class App extends Component {
  render() {
    
    return (
      <div className="App">
        <h2>Main Page</h2>
        <Card />
      </div>
    );
  }
}

export default App;
