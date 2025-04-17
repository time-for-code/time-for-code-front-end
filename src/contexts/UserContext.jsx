import { createContext, useContext, useState } from "react"

//creating a context to store the user data with a default value as null and no function
const UserContext = createContext({
    user: null,
    armazenarLogin: (data) => { UserProvider.armazenarLogin(data) },
    armazenarCadastro: (data) => { UserProvider.armazenarCadastro(data) },
    sair: () => { UserProvider.sair() },
})

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const armazenarLogin = (data) => {
        if (data !== null) {
            setUser(data.user)
            console.log(user);
        }
    }

    const armazenarCadastro = (data) => {
        if (data !== null) {
            setUser(data.user)
            console.log(user);
        }
    }

    const sair = () => {
        if (user !== null) {
            setUser(null)
        }
    }

    return (
        <UserContext.Provider value={{ user, armazenarLogin, armazenarCadastro, sair }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext)