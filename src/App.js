import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Dashboard from "./scene/dashboard";
import Info from "./scene/info";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/info" component={Info} />
        <Route path="/" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
