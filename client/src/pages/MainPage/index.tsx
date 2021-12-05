import React from "react";

import LayoutDefault from "@Layouts/LayoutDefault";
import {GreetingsBlock, TeamSearchBlock} from "@Pages/MainPage/components";

const Main = ():JSX.Element => {
    return (
        <LayoutDefault>
            <GreetingsBlock />
            <TeamSearchBlock />
        </LayoutDefault>
    )
}

export default Main;