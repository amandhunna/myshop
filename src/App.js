import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import PrivateLayout from "./lib/layout/privateLayout/PrivateLayout";
import privateRoutes from "./privateRoutes";

import publicRoutes from "./publicRoutes";

function App() {


  return (
    <Router>
      <Switch>
        {publicRoutes.map((route, key) => {
          const { component, path, titleComponents, header, unScrollable } = route;
          return (
            <Route
              exact
              path={path}
              key={key}
              render={(route) =>
                <PrivateLayout
                  route={route}
                  component={component}
                  titleComponents={titleComponents}
                  header={header}
                  unScrollable={unScrollable}
                />
              }
            />
          )
        })}
        {privateRoutes.map((route, key) => {
          const { component, path, titleComponents, header, unScrollable } = route;
          return (
            <Route
              exact
              path={path}
              key={key}
              render={(route) =>
                <PrivateLayout
                  route={route}
                  component={component}
                  titleComponents={titleComponents}
                  header={header}
                  unScrollable={unScrollable}
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
