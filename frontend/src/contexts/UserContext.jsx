import { createContext, useState } from "react";    

export const UserContext=createContext({});

export const UserProvider = (props) => {

    const [name, setName] = useState("");
    const [cpf , setCpf] = useState("");
    const [bDate, setBDate] = useState("");
    const [email, setEmail] = useState("");

    async function collectUser() {
        const response = await fetch("http://localhost:4000/user", {method: 'get', credentials: 'include'})
                               .then(data => data.json())
                               .then(resposta => resposta)
                               .catch(error=> console.log(error));
        setName(response.user.name);
        setCpf(response.user.cpf);
        setBDate(response.user.bDate);
        setEmail(response.user.email);
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