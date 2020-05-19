import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AddProducts from "./scene/addProducts"
import Order from "./scene/order";
import Info from "./scene/info";
import Intro from "./scene/intro"
import BuyProducts from './scene/order/buyProducts';

function App() {
  return (

    <Router>
      <nav>
        <Link to="/"> Saada Baazar</Link>
        <Link className="secondary" to="/orders">Orders</Link>
        <Link className="secondary" to="/info" >Info</Link>
        <Link className="secondary" to="/addProducts" >Add Products</Link>
        <Link className="secondary" to="/buyProducts" >Buy Products</Link>
        <div class="g-signin2" data-onsuccess="onSignIn"></div>
      </nav>
      <Switch>
        <Route path="/info" component={Info} />
        <Route path="/buyProducts" component={BuyProducts} />
        <Route path="/orders" component={Order} />
        <Route path="/addProducts" component={AddProducts} />
        <Route path="/" component={Intro} />
      </Switch>
    </Router>
  );
}

export default App;
