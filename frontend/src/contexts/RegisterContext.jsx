import { createContext, useState } from "react";

export const RegisterContext=createContext({});

export const RegisterProvider = (props) => {

    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [bDate, setBDate] = useState("");
    const [password, setPassword] = useState("");

    return (
        <RegisterContext.Provider
            value={{
                name, setName,
                cpf, setCpf,
                email, setEmail,
                bDate, setBDate,
                password, setPassword
            }}
        >
            {props.children}
        </RegisterContext.Provider>
    )

};