import { createContext, useState } from "react";

export const UserContext = createContext({
    user:null,
    token:null,
    setUser:()=>{},
    setToken:()=>{},
})

export const UserContextProvider = ({children}) =>{
    const [user,setUser] = useState({});
    const [token,_setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));
    const setToken = (token) =>{
        if(token){
            _setToken(token);
        }
    }
    return (
        <UserContext.Provider value={{
            user,token,setUser,setToken
        }}>
            {children}
        </UserContext.Provider>
    )
}