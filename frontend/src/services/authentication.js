

function login(token) {

    const user = {
        // email: "test@test.com",
        token: token,
        // userId: 1
    }
    
    localStorage.setItem('user', JSON.stringify(user))
    return token
}

function logout() {

    localStorage.removeItem('user')
}

function isLogged(){
    const user = localStorage.getItem('user')
    return user !== null
}

function getUser() {
    return JSON.parse(localStorage.getItem('user'))
}

const authService = {
    login,
    logout,
    isLogged,
    getUser
}

export default authService