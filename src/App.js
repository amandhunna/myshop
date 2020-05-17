import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Dashboard from "./scene/dashboard";
import Info from "./scene/info";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/"> Main</Link>
        <Link to="/info" >Info</Link>
      </nav>
      <Switch>
        <Route path="/info" component={Info} />
        <Route path="/" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
