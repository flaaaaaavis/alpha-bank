import { createContext, useState } from "react";    

export const AccountContext=createContext({});

export const AccountProvider = (props) => {

    const [number, setNumber] = useState("123456123456-78");
    const [uuid , setUuid] = useState("random uuid only for testing");
    const [balance, setBalance] = useState(100000,23);

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