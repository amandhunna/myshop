import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Dashboard from "./scene/order";
import Info from "./scene/info";
import Intro from "./scene/intro"

function App() {
  return (
    <Router>
      <nav>
        <Link to="/"> Saada Baazar</Link>
        <Link className="secondary" to="/orders">Orders</Link>
        <Link className="secondary" to="/info" >Info</Link>
      </nav>
      <Switch>
        <Route path="/info" component={Info} />
        <Route path="/orders" component={Dashboard} />
        <Route path="/" component={Intro} />
      </Switch>
    </Router>
  );
}

export default App;
