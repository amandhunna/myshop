import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import PrivateLayout from "./lib/layout/privateLayout/PrivateLayout";
import PublicLayout from "./lib/layout/publicLayout/PublicLayout";
import privateRoutes from "./privateRoutes";
import Page404 from "./scene/page404";
import publicRoutes from "./publicRoutes";

function App() {


  return (
    <BrowserRouter>
      <Switch>
        {publicRoutes.map((route, key) => {
          const { component, path, titleComponents, header, unScrollable } = route;
          return (
            <Route
              exact
              path={path}
              key={key}
              render={(route) =>
                <PublicLayout
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
            <Route
              path='*'
              render={(route) =>
                <PrivateLayout
                  route={route}
                  component={Page404}
                  titleComponents={{ title: 'Page not found', component: [] }}
                />
              }
            />
          )
        })}
        
        </Switch>
    </BrowserRouter>
  );
}

export default App;
