class dataControl() {
    let db = JSON.parse(fs.readFileSync('mock.json', 'utf8'))
    // console.log(db)

    checkBalance() {
        // conferir se tem saldo antes de transferir

        
    }
    addInfo() {
        db.map(account => {
            // ver se o usuário tem conta
        })
    }
    deleteInfo() {

    }
    updateInfo() {

    }
    transfer() {
        const balanceResult = this.checkBalance();
        if(balanceResult) {
            // tira saldo de fulano
            // coloca saldo em beltrano
        }
    }

}