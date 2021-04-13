import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Apointment from './components/Apointment/Apointment/Apointment';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/apointment">
        <Apointment></Apointment>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
