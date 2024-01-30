import React,{useState, useEffect } from "react";
import {useRouter} from "next/router";

// Import Internal
import{
    CheckIfWalletConnected,
    connectWallet,
    connectingWithContract,
} from "../Utils/apiFeature";

export const ChatAppContact = React.createContext();

export const ChatAppProvider = ({ Children }) => {
    const title = "Hey Welcome to blockchain Chat App";

    return(
        <ChatAppContact.Provider value={{ title }}>
            {children}
        </ChatAppContact.Provider>
    );
};