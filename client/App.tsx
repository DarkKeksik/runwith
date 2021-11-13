import React from "react";
import "@stylesCommon/app.scss"
import {
    Switch,
    Route
} from "react-router-dom";

import { MainPage, NotFound } from "./src/pages";

export function App() {
    return (
        <>
            <Switch>
                <Route path="/" exact>
                    <MainPage />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </>
    );
}