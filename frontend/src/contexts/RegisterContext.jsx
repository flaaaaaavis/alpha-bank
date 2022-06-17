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

        const newUser = {
            name: name,
            cpf: cpf,
            email: email,
            bDate: bDate,
            password: password
        };

        const options = {
            method:'POST',
            mode: 'cors',
            body: JSON.stringify(newUser),
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include'
        };

        const response = await fetch("http://localhost:4000/addUser", options)
                               .then(data => data.json())
                               .then(res => res)
                               .catch(error => console.log(error));
        if (response.status) {
            
            navigate('/registrationemailcode')

        } else {

            console.log(response.message)

        }        

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