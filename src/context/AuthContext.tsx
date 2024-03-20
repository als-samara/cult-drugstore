import { ReactNode, createContext, useState } from "react"
import UserLogin from "../models/UserLogin"
import { login } from "../services/Service";
import { toastError, toastSuccess } from "../utils/ToastAlert"

interface AuthContextProps {
    user: UserLogin
    handleLogout(): void
    handleLogin(user: UserLogin): Promise<void>
    isLoading: boolean
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<UserLogin>({
        id: 0,
        name: "",
        username: "",
        password: "",
        photo: "",
        token: "",
        roles: ""
    })

    const [isLoading, setIsLoading] = useState(false)

    async function handleLogin(userLogin: UserLogin) {
        setIsLoading(true)

        try {
            await login('/users/login', userLogin, setUser)
            toastSuccess('Usuário logado com sucesso');
            setIsLoading(false)           
        }
        catch (error: any) {
            if (error.response && error.response.data){
            toastError(error.response.data)
            } else {
                toastError("Os dados do Usuário estão inconsistentes!")
            }
            setIsLoading(false)
        }
    }

    function handleLogout() {
        setUser({
            id: 0,
            name: '',
            username: '',
            password: '',
            photo: '',
            token: '',
            roles: ''
        })
    }

    return (
        <AuthContext.Provider value={{ user, handleLogin, handleLogout, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}