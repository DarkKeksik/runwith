import * as React from "react";
import { hydrate } from "react-dom";
import { App } from "./App";
import {
    BrowserRouter as Router,
} from "react-router-dom";

hydrate(
    <Router>
        { App() }
    </Router>,
document.getElementById('root'));