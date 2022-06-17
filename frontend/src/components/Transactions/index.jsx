import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import FormError from './components/formError.jsx'
import Form1 from './components/form1.jsx'
import Form2 from './components/form2.jsx'
import Form3 from './components/form3.jsx'
import Form4  from './components/form4.jsx'
import { Main, Form, Panel, Table, TableHead, TableBody } from './index'
import { useEffect } from 'react';

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
    
    return (
        <Main>
            <Form>
                <BrowserRouter>
                    <Routes>
                        <Route path="/formError" element={<FormError showData={showData} handleData={handleData} />} />
                        <Route path="/" element={<Form1 showData={showData} handleData={handleData} />} />
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
                    </TableBody>
                </Table>
            </Panel>
        </Main>
    )
}

export default Transactions