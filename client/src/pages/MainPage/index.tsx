import React, {useEffect, useState} from "react"

import LayoutDefault from "@Layouts/LayoutDefault"
import { GreetingsBlock, TeamSearchForm } from "@Pages/MainPage/partsPage"
import { GreetingsBlockType } from "@pages/MainPage/types"

const Main = () => {
    const [greetingsData, setGreetingsData] = useState<GreetingsBlockType>({})

    useEffect(() => {
        const fetchData = async () => (
            await fetch(`/api/get/content?page=main`, { method: "GET" })
        )

        fetchData().then(async (data) => {
            const json = await data.json()
            setGreetingsData(json)
        }).catch((data) => {
            console.log(`Something wrong: ${ data }`)
        })

    }, [])

    return (
        <LayoutDefault>
            <GreetingsBlock {...greetingsData} />
            <TeamSearchForm />
        </LayoutDefault>
    )
}

export default Main