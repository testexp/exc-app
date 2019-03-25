import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
          <Route exact path="/module1" component={Home} />
          <Route path="/module2" component={About} />
        </Router>
      </div>
    );
  }
}


function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}
