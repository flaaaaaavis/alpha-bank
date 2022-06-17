import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import FormError from './components/formError.jsx'
import Form1 from './components/form1.jsx'
import Form2 from './components/form2.jsx'
import Form3 from './components/form3.jsx'
import Form4  from './components/form4.jsx'
import { Main, Form, Panel, Table, TableHead, TableBody } from './index'

import { TransactionsContext } from '../../contexts/TransactionContext'

function Transactions() {
    const [showData, setShowData] = useState({
        "name": "",
        "account": "",
        "value": ""
    })

    async function handleData(data) {
        setShowData(
            (prevState) => (
                {
                    ...prevState,
                    ...data
                }
            )
        )        
    }
    useEffect(() => console.log(showData), [showData])
    
    const { transactions } = useContext(TransactionsContext);

    let mapReverse1 = transactions.slice(0)
    mapReverse1 = mapReverse1.reverse()
    mapReverse1 = mapReverse1.map(element => {
        return element;
    });

    return (
        <Main>
            <Form>
                <BrowserRouter>
                    <Routes>
                        <Route path="/formError" element={<FormError showData={showData} handleData={handleData} />} />
                        <Route path="/transactions" element={<Form1 showData={showData} handleData={handleData} />} />
                        <Route path="/form2" element={<Form2 showData={showData} handleData={handleData} />} />
                        <Route path="/form3" element={<Form3 showData={showData} handleData={handleData} />} />
                        <Route path="/form4" element={<Form4 />} />
                    </Routes>
                </BrowserRouter>
            </Form>

            <Panel>
                <h2>Histórico de transferências</h2>
                <Table>
                    <TableHead>
                        <tr>
                            <th>Destinatário</th>
                            <th>Data e Hora</th>
                            <th>Valor</th>
                        </tr>
                    </TableHead>
                    <TableBody>
                        {
                            mapReverse1.map(transaction => {
                                const receiver = transaction.receiver_account;
                                const date = transaction.date;
                                const value = transaction.value;
                                return (
                                    <tr>
                                        <td>{receiver}</td>
                                        <td>{date}</td>
                                        <td>{value}</td>
                                    </tr>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </Panel>
        </Main>
    )
}

export default Transactions