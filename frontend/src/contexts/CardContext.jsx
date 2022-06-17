import { createContext, useState } from "react";    

export const CardContext=createContext({});

export const CardProvider = (props) => {

    const [cardNumber, setCardNumber] = useState("");
    const [expirityDate , setExpirityDate] = useState("");
    const [SSID, setSSID] = useState("");

    async function collectCard() {
        const response = await fetch("http://localhost:4000/card", {credentials: 'include'})
                               .then(data => data.json())
                               .then(resposta => resposta)
                               .catch(error=> console.log(error));
        setCardNumber(response.card.number);
        setExpirityDate(response.card.expirity_date.split("T")[0]);
        setSSID(response.card.ssid);
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