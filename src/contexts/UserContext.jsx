import { createContext, useContext, useState, useEffect } from "react"

//creating a context to store the user data with a default value as null and no function
const UserContext = createContext({
    user: null,
    armazenarLogin: (data) => { UserProvider.armazenarLogin(data) },
    armazenarCadastro: (data) => { UserProvider.armazenarCadastro(data) },
    sair: () => { UserProvider.sair() },
})

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Fetch user info from backend on mount (after reload)
    useEffect(() => {
        async function fetchUser() {
            try {
                const res = await fetch("http://localhost:3000/sesion", {
                    credentials: "include", // send cookies
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                if (res.ok) {
                    const data = await res.json();
                    setUser(data.user);
                }
            } catch (e) {
                setUser(null);
            }
        }
        fetchUser();
    }, []);

    const armazenarLogin = (data) => {
        if (data !== null) {
            setUser(data);
        }
    }

    const armazenarCadastro = (data) => {
        if (data !== null) {
            setUser(data)
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