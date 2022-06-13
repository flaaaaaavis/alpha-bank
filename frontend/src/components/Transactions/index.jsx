import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Form1, Form2, Form3, Form4 } from './components'
import { StyledMain, Form, Panel, Table, TableHead, TableBody } from './index'

function Transactions() {
    return (
        <StyledMain>

            <Form>
                <BrowserRouter>
                    <Switch>
                        <Route path="/form1">
                            <Form1 />
                        </Route>
                        <Route path="/form2">
                            <Form2 />
                        </Route>
                        <Route path="/form3">
                            <Form3 />
                        </Route>
                        <Route path="/form4">
                            <Form4 />
                        </Route>
                    </Switch>
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
                    <TableBody>{}</TableBody>
                </Table>
            </Panel>

        </StyledMain>
    )
}

export default Transactions