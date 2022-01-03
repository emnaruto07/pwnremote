

function login(key) {

    const user = {
        // email: "test@test.com",
        token: key,
        // userId: 1
    }
    
    localStorage.setItem('user', JSON.stringify(user))
    return key
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