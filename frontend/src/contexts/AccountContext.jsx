import { createContext, useState } from "react";    

export const AccountContext=createContext({});

export const AccountProvider = (props) => {

    const [number, setNumber] = useState("");
    const [uuid , setUuid] = useState("");
    const [balance, setBalance] = useState(0);

    return (
        <AccountContext.Provider
            value={{
                number,
                setNumber,
                uuid,
                setUuid,
                balance,
                setBalance
            }}
        >
            {props.children}
        </AccountContext.Provider>
    )

};