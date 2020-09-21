import React from 'react';

import { Switch, Route } from 'react-router-dom';
import {ReactModal as Modal} from 'react-modal';

import Home from 'Home'

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
          <Switch>
            <Route exactpath='/' component={HomePage}/>
          </Switch>
      </div>
    );
  }
}

export default App;
