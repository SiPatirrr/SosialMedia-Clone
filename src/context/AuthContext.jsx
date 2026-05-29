import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [loginUser, setLoginUser] = useState(null);

    useEffect(() => {
        const data = localStorage.getItem("loginUser");
        if (data) {
            setLoginUser(JSON.parse(data));
        }
    }, []);

    return (
        <AuthContext.Provider value={{ loginUser, setLoginUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;