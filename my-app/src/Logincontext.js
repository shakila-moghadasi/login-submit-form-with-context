import { createContext , useState} from "react";

export const Logincontext  = new createContext()

const LogincontextProvider = ({children}) => {
    const [loggedInUser, setLoggedInUser] = useState(null)
    
    return (
        <Logincontext.Provider value={{loggedInUser ,setLoggedInUser}}>
            {children}
        </Logincontext.Provider>
    )
}

export default LogincontextProvider