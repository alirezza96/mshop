"use client"
import { createContext } from "react";
export const payloadContext = createContext()

export default function Provider({ children, value }) {
    return (
        <payloadContext.Provider value={value}>
            {children}
        </payloadContext.Provider>
    )
}