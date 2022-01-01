import React from "react"
import authService from "../services/authentication"
import { useState } from "react"

export const AuthContext = React.createContext(null)

export function AuthContextProvider({children}) {

    const [user, setUser] = useState(() => {
        return authService.getUser()
    })

    function logout(){
        authService.logout()
        setUser(null)
    }

    function login(){
        const user = authService.login()
        setUser(user)
    }
    return (
        <AuthContext.Provider value={{
            logout,
            login,
            user
        }}>
            {children}
        </AuthContext.Provider>
    )
}