import { createContext, useState } from "react";    

export const UserContext=createContext({});

export const UserProvider = (props) => {

    const [name, setName] = useState("Fulano Carvalho");
    const [cpf , setCpf] = useState("123.456.789-10");
    const [bDate, setBDate] = useState("26/05/1523");
    const [email, setEmail] = useState("daSilvaFulano@email.com");

    return (
        <UserContext.Provider
            value={{
                name,
                setName,
                cpf,
                setCpf,
                bDate,
                setBDate,
                email,
                setEmail
            }}
        >
            {props.children}
        </UserContext.Provider>
    )

};