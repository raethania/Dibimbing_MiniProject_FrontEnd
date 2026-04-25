import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function useAuth(){
    const context = useContext(AuthContext);

    if (!context){
        throw new Error("Use auth hanya bisa digunakan di dalam Auth Provider");
    }

    return context;
}