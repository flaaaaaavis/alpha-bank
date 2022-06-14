import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Form1 from './components/Form1.jsx'
import Form2 from './components/Form2.jsx'
import Form3 from './components/Form3.jsx'
import Form4  from './components/Form4.jsx'
import { Main, Form, Panel, Table, TableHead, TableBody } from './index'

function Transactions() {
    return (
        <Main>
            <Form>
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<Form1 />}/>
                        <Route exact path="/form2" element={<Form2 />}/>
                        <Route exact path="/form3" element={<Form3 />}/>
                        <Route path="/form4" element={<Form4 />}/>
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