import React from "react";
import {
    Switch,
    Route
} from "react-router-dom";

import "@StylesCommon/app.scss"
import { MainPage, NotFound } from "./src/pages";


const App = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <MainPage />
            </Route>
            <Route path="*">
                <NotFound />
            </Route>
        </Switch>
    );
}

export default App;