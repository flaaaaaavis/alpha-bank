import { createContext, useState } from "react";    

export const CardContext=createContext({});

export const CardProvider = (props) => {

    const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000");
    const [expirityDate , setExpirityDate] = useState("12/37");
    const [SSID, setSSID] = useState("567");

    async function collectCard() {
        const response = await fetch("http://localhost:4000/card");
        setCardNumber(response.rows[0].number);
        setExpirityDate(response.rows[0].expirity_date);
        setSSID(response.rows[0].ssid);
    }

    return (
        <CardContext.Provider
            value={{
                cardNumber,
                expirityDate,
                SSID,
                collectCard
            }}
        >
            {props.children}
        </CardContext.Provider>
    )

};