import { createContext, useState } from "react";    

export const CardContext=createContext({});

export const CardProvider = (props) => {

    const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000");
    const [expirityDate , setExpirityDate] = useState("12/37");
    const [SSID, setSSID] = useState("567");

    return (
        <CardContext.Provider
            value={{
                cardNumber,
                setCardNumber,
                expirityDate,
                setExpirityDate,
                SSID,
                setSSID
            }}
        >
            {props.children}
        </CardContext.Provider>
    )

};