import React from "react";

import LayoutDefault from "@Layouts/LayoutDefault";
import {GreetingsBlock, TeamSearchForm} from "@Pages/MainPage/components";

const Main = ():JSX.Element => {
    return (
        <LayoutDefault>
            <GreetingsBlock />
            <TeamSearchForm />
        </LayoutDefault>
    )
}

export default Main;