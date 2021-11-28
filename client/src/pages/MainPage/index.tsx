import React from "react";

import LayoutDefault from "@Layouts/LayoutDefault";
import {Greetings, TeamSearch} from "./components";

const Main = ():JSX.Element => {
    return (
        <LayoutDefault>
            <Greetings />
            <TeamSearch />
        </LayoutDefault>
    )
}

export default Main;