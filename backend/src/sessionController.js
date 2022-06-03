const sessions = [];

class sessionController {
    createSession(token, user) {
        
        sessions.push({token, user}); // {token, user: {login, password, name}}

    }
    getSession(token) {

        const session = sessions.filter(element => element.token === token);
        if (session.length > 0) {
            return session[0].user; // {token, user: {login, password, name}}
        } else {
            return false;
        }

    }
    deleteSession(token) {

        const sessionIndex = sessions.findIndex(element => element.token === token);
        sessions.pop(sessionIndex, 1);        

    }
}

const session = new sessionController;

module.exports = session;