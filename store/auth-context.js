import { createContext, useState } from "react";

export const AuthContext = createContext({
    token: '',
    isAuthenticated: false,
    authenticate:() => {},
    logout: () =>{},
});
function AuthContextProvider({children}) {
    const [authToken, setAuthToken] = useState(null);

    function authenticate(token) {
        setAuthToken(token);
        AsyncStoage.setItem('token', token);
    }

    function logout(){
        setAuthToken(null);
        AsyncStoage.removeItem('token');
    }

    const value ={
        token: authToken,
        isAuthenticated: !!authToken,
        authenticate: authenticate,
        logout: logout,
    };


    return <AuthContext.Provider value ={value}>{children}</AuthContext.Provider>

}
export default AuthContextProvider;