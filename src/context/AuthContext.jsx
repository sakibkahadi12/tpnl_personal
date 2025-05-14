"use client"
import LoadingComponent from "@/components/LoadingComponent";
import { useSession } from "next-auth/react";

const { createContext, useState, useEffect } = require("react");

export const AuthContext = createContext();
export const AuthProvider = ({children})=>{
    const {data: session, status} = useSession();
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        if(status === 'loading'){
            setLoading(true)
        }else{
            setUser(session?.user || null)
            setLoading(false)
        }
    },[session, status]);
    const userInfo = {
        user, loading
    }
    if(loading ){
        return <LoadingComponent />
    }
    return (
         <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
    )
}