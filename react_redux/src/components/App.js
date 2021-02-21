import React from "react";
import { HashRouter, Route } from "react-router-dom";

import Home from "../pages/Home";
import Detail from "../pages/Detail";

const App = () => {
    return (
        <HashRouter>
            <Route path="/" exact component={Home}></Route>
            <Route path="/:id" component={Detail}></Route>
        </HashRouter>
    );
};

export default App;
