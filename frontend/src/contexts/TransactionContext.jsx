import { createContext, useState } from "react";    

export const TransactionsContext=createContext({});

export const TransactionsProvider = (props) => {

    const [transactions, setTransactions] = useState([]);

    async function collectTransactions() {
        const response = await fetch("http://localhost:4000/transactions");
        const array = [];
        response.rows.forEach(element => {
            const dado = {
                "description": element.description,
                "date": element.date,
                "value":element.value
            }
            array.push(dado)
        });
        setTransactions(array);
    }

    return (
        <TransactionsContext.Provider
            value={{
                transactions,
                collectTransactions
            }}
        >
            {props.children}
        </TransactionsContext.Provider>
    )

};