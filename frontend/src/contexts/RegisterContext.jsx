import { createContext, useState } from "react";
import { useNavigate } from 'react-router-dom'

export const RegisterContext=createContext({});

export const RegisterProvider = (props) => {

    const [name, setName] = useState("")
    const [cpf, setCpf] = useState("")
    const [email, setEmail] = useState("")
    const [bDate, setBDate] = useState("")
    const [password, setPassword] = useState("")
    let navigate = useNavigate()

    async function registerUser(e){
        e.preventDefault();
        

        //fetch


        
        navigate('/registrationemailcode')



    }

    return (
        <RegisterContext.Provider
            value={{
                name, setName,
                cpf, setCpf,
                email, setEmail,
                bDate, setBDate,
                password, setPassword,
                registerUser
            }}
        >
            {props.children}
        </RegisterContext.Provider>
    )

};