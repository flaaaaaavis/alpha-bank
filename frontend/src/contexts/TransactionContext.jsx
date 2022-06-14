import { createContext, useState } from "react";    

export const TransactionsContext=createContext({});

export const TransactionsProvider = (props) => {

    const [transactions, setTransactions] = useState(
        [
            {
                "description": "Pix Enviado",
                "date":"29/05/2022 16:20",
                "value":"-95,49",                
            }, {
                "description": "Débito",
                "date":"29/05/2022 11:15",
                "value":"-75,00"
            }, {
                "description": "Depósito online",
                "date":"27/05/2022 06:10",
                "value":"100,00"
            }, {
                "description": "Herança",
                "date":"22/04/2022 09:12",
                "value":"100,070,72"
            }
        ]
    );   

    return (
        <TransactionsContext.Provider
            value={{
                transactions,
                setTransactions
            }}
        >
            {props.children}
        </TransactionsContext.Provider>
    )

};