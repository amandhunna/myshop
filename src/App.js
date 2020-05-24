import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import PrivateLayout from "./lib/layout/privateLayout/PrivateLayout";
import routes from "./routes";

function App() {


  return (
    <Router>
      {/* <div class="g-signIn d-none d-md-block"><GoogleLogin /></div> */}
      <Switch>
        {routes.map((route, key) => {
          const { component, path, title } = route;
          return (
            <Route
              exact
              path={path}
              key={key}
              render={(route) =>
                <PrivateLayout
                  route={route}
                  component={component}
                  title={title}
                />
              }
            />
          )
        })}
      </Switch>
    </Router>
  );
}

export default App;
