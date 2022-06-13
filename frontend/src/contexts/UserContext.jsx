import { createContext, useState } from "react";    

export const UserContext=createContext({});

export const UserProvider = (props) => {

    const [name, setName] = useState("");
    const [cpf , setCpf] = useState("");
    const [bDate, setBDate] = useState("");
    const [email, setEmail] = useState("");

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