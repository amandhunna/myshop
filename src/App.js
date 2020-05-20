import React, { useState } from 'react';
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
import BuyProducts from './scene/buyProducts';
import GoogleLogin from "./lib/components/GoogleLogin";


function App() {
  const [active, setActive] = useState("inactive");
  return (

    <Router>
      <header className="d-flex justify-content-between align-items-center">
        <span className="humburger d-md-none" onClick={() => setActive("active")}><i></i></span>
        <nav id="sideBar" className={`d-none d-md-flex ${active}`}>
          <span className="homeLink">
            <Link to="/"> Saada Bazar</Link>
            <i className="d-md-none" onClick={() => setActive("inactive")}><i class="fa fa-times"></i></i></span>
          <Link className="secondary" to="/orders">Orders</Link>
          <Link className="secondary" to="/info" >Info</Link>
          <Link className="secondary" to="/addProducts" >Add Products</Link>
          <Link className="secondary" to="/buyProducts" >Buy Products</Link>
        </nav>
        <div class="g-signIn"><GoogleLogin /></div>
      </header>
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
