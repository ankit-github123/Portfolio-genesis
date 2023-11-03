'use client'
import { createContext, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { isValidObject } from "@utils/services";
export const AppContext = createContext()

export const AppContextProvider = ({ children }) => {
    const { data } = useSession()
    const [portfolio, setPortfolio] = useState("nay");
    const [session, setSession] = useState();

    useEffect(() => {
        if (isValidObject(data))
            setSession(data);
    }, [data])
    return <AppContext.Provider value={{ portfolio, setPortfolio, session }}>{children}</AppContext.Provider>
}