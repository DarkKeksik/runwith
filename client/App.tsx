import React from "react";
import "@stylesCommon/app.scss"
import {
    Link,
    Switch,
    Route
} from "react-router-dom";

import { MainPage } from "./src/pages";

export function App() {
    return (
        <>
            <Link to="/">Home</Link>
            <Switch>
                <Route path="/" exact>
                    <MainPage />
                </Route>
                <Route path="*">
                    <>404 You will not pass</>
                </Route>
            </Switch>
        </>
    );
}