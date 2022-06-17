import { createContext, useState } from "react";    

export const TransactionsContext=createContext({});

export const TransactionsProvider = (props) => {

    const [transactions, setTransactions] = useState([]);

    async function collectTransactions() {
        const response = await fetch("http://localhost:4000/transactions", {credentials: 'include'})
                               .then(data => data.json())
                               .then(resposta => resposta)
                               .catch(error=> console.log(error));
        const array = [];
        response.transactions.forEach(element => {
            const dado = {
                "description": element.description,
                "date": element.date,
                "value": element.value,
                "sender_account": element.sender_account,
                "receiver_account": element.receiver_account
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