import React from "react";
import { Header, Footer } from "../../components";

interface PropsInterface {
    children?: React.ReactNode
}

const LayoutDefault = ({children}: PropsInterface):JSX.Element => {
    return (
        <>
            <Header />
            { children }
            <Footer />
        </>
    )
}

export default LayoutDefault;