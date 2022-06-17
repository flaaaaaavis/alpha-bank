import { createContext, useState } from "react";    

export const UserContext=createContext({});

export const UserProvider = (props) => {

    const [name, setName] = useState("");
    const [cpf , setCpf] = useState("");
    const [bDate, setBDate] = useState("");
    const [email, setEmail] = useState("");

    async function collectUser() {
        const response = await fetch("http://localhost:4000/user");
        setName(response.rows[0].name);
        setCpf(response.rows[0].cpf);
        setBDate(response.rows[0].bDate);
        setEmail(response.rows[0].email);
    }

    return (
        <UserContext.Provider
            value={{
                name,
                cpf,
                bDate,
                email,
                collectUser
            }}
        >
            {props.children}
        </UserContext.Provider>
    )

};