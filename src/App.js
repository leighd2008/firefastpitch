import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage';

const Fire14U = () => (
  <div>
    <h1> Fire 14U</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route pathe='/Fire_14U' component={Fire14U} />
      </Switch>
    </div>
  );
}

export default App;
