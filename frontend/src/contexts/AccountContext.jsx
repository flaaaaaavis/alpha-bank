import { createContext, useState } from "react";    

export const AccountContext=createContext({});

export const AccountProvider = (props) => {

    const [number, setNumber] = useState("");
    const [uuid , setUuid] = useState("");
    const [balance, setBalance] = useState(0);

    async function collectAccount() {
        const response = await fetch("http://localhost:4000/account", {credentials: 'include'})
                               .then(data => data.json())
                               .then(resposta => resposta)
                               .catch(error=> console.log(error));
        setNumber(response.account.number);
        setUuid(response.account.uuid);
        setBalance(parseFloat(response.account.balance));
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