import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';


import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import {AnimatedCover} from './pages/AnimatedCover';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <header className="masthead mb-auto text-center">
          <div className="inner">
            <nav className="nav nav-masthead justify-content-center">
                <NavLink className="nav-link" activeClassName="active" to="/animated-cover">Animated Cover</NavLink>
            </nav>
          </div>
        </header>        
        <main role="main">
          <Route path="/animated-cover" component={AnimatedCover} />
        </main>
        <footer className="mastfoot mt-auto">
          <div className="inner">
          </div>
        </footer>
      </div>
    </Router>
    );
  }
}

export default App;
