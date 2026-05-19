import { createContext, useState } from "react";
import type { ReactNode } from "react";
import api from "../api/api";

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

    const logout = async () => {
        try {
            await api.post("/api/v1/auth/logout");
        } catch (error) {
            console.error("Logout error", error);
        }
        localStorage.removeItem("token");
        setToken(null);
    };

    return (
        <AuthContext.Provider value={{ token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}