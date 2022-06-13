import { createContext, useState } from "react";    

export const CardContext=createContext({});

export const CardProvider = (props) => {

    const [cardNumber, setCardNumber] = useState("");
    const [expirityDate , setExpirityDate] = useState("");
    const [SSID, setSSID] = useState(0);

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