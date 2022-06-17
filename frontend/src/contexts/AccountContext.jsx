import { createContext, useState } from "react";    

export const AccountContext=createContext({});

export const AccountProvider = (props) => {

    const [number, setNumber] = useState("");
    const [uuid , setUuid] = useState("");
    const [balance, setBalance] = useState(0);

    async function collectAccount() {
        const response = await fetch("http://localhost:4000/card");
        setNumber(response.rows[0].number);
        setUuid(response.rows[0].uuid);
        setBalance(parseFloat(response.rows[0].balance));
    }

    return (
        <AccountContext.Provider
            value={{
                number,
                uuid,
                balance,
                collectAccount
            }}
        >
            {props.children}
        </AccountContext.Provider>
    )

};