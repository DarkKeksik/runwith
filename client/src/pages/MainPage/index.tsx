import React from "react"

import LayoutDefault from "@Layouts/LayoutDefault"
import { GreetingsBlock, TeamSearchForm } from "@Pages/MainPage/partsPage"

// @TODO настроить хуки для SSR
const Main = ():JSX.Element => {
    // @ts-ignore
    // const { greetingsBlockData, setGreetingsBlockData } = useState({})
    //
    // useEffect(() => {
    //     fetch(
    //         `https://adventuretimeapi.herokuapp.com/people`,
    //         { method: "GET" }
    //     )
    //         .then(res => res.json())
    //         .then(data => setGreetingsBlockData(data))
    // }, [])
    //
    // setGreetingsBlockData({test: 1})
    //
    // console.log('greetingsBlockData test: ', greetingsBlockData)

    return (
        <LayoutDefault>
            <GreetingsBlock />
            <TeamSearchForm />
        </LayoutDefault>
    )
}

export default Main