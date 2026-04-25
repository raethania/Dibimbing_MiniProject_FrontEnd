import { createContext, useState } from "react";

type AuthContextType = {
    token: string | null;
    login: (newToken: string) => void;
    logout: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({children} : AuthProviderProps){


    const [token, setToken] = useState<string|null>(localStorage.getItem("token"));

    const login = (newToken: string) => {
        localStorage.setItem("token", newToken);
        setToken(newToken);
    }

    const logout = () => {
        localStorage.removeItem("token");
        setToken(null);
    };

    return (
        <AuthContext.Provider value={{ token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}