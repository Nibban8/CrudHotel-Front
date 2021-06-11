import React from 'react';

import Hoteles from './Hoteles/Hoteles';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className='container mt-5'>
      <Router>
        <Switch>
          <Route path='/Hoteles' component={Hoteles} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
