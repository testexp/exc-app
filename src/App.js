import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {ModuleA} from "module-a";
import {ModuleB} from "module-b";
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <header className="App-header">
              <p className="App-name">Adobe Excperience Cloud</p>
              <Link to="/module1" className="App-route">Module 1</Link>
              <Link to="/module2" className="App-route">Module 2</Link>
          </header>
          <Route path="/module1" component={ModuleA} />
          <Route path="/module2" component={ModuleB} />
        </Router>
      </div>
    );
  }
}
