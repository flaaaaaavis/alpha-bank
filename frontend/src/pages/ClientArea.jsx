import React from 'react';

import Header from '../components/header/header.jsx'

import Statements from '../components/Statements/index.jsx'
// import Transactions from '../components/Transactions'

function ClientArea() {
    return (
        <>
            <Header />
            <Statements />
        </>
    )
}

export default ClientArea