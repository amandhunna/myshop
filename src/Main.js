import React from "react";
import { Switch } from "react-router-dom";
import privateRoutes from "./privateRoutes";

const Main = () => (
    <>
        <Switch>{privateRoutes}</Switch>
    </>
);

export default Main;
