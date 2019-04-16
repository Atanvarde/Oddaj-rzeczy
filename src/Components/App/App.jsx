import React, { Component } from 'react';
import './App.scss';
import LandingPage from '../Landing_page/LandingPage.jsx';

import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <HashRouter>
          <div>
            <Route exact path='/' component={LandingPage}/>
          </div>
        </HashRouter>
    );
  }
}

export default App;
