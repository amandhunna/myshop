import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Info from "./scene/info";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Info} />
      </Switch>
  </Router>
  );
}

export default App;
