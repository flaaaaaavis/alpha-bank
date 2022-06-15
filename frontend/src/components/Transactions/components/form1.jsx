import {Link} from 'react-router-dom'

function Form1({ showData, setShowData }) {
    async function getData() {
        const cpf = document.getElementById('cpf').value
        const account = document.getElementById('account').value


        if (cpf && account) {
            await fetch('http://localhost:3000/accountByCPFnAccount', {
                method: 'GET',
                body: {
                    cpf: cpf,
                    number: account
                }
            }).then(response => {
                response.json()
            }).then(data => {
                setShowData({
                    "name": data.user.name,
                    "account": data.account.number
                })
                return ('/form2')
            })

        } else if (cpf && !account) {
            await fetch('http://localhost:3000/accountByCPF', {
                method: 'GET',
                body: {
                    cpf: cpf
                }
            }).then(response => {
                response.json()
            }).then(data => {
                setShowData({
                    "name": data.user.name,
                    "account": data.account.number
                })
                return ('/form2')
            })
        } else if (account && !cpf ) {
            await fetch('http://localhost:3000/accountByNumber', {
                method: 'GET',
                body: {
                    account: account
                }
            }).then(response => {
                response.json()
            }).then(data => {
                setShowData({
                    "name": data.user.name,
                    "account": data.account.number
                })
                return ('/form2')
            })
        } else {
            return ('/formError')
        }

    }

    return <>
        <h3>Para quem está transferindo?</h3>
        <input id='cpf' type="text" length="11" placeholder='CPF' />
        <p>ou</p>
        <input id='account' type="text" placeholder='Código da Conta' />
        <Link to={getData()}><button>Continuar</button></Link>
    </>
}

export default Form1