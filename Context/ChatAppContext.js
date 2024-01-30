import React,{useState, useEffect } from "react";
import {useRouter} from "next/router";

// Import Internal
import{
    CheckIfWalletConnected,
    connectWallet,
    connectingWithContract,
} from "../Utils/apiFeatures.js";

export const ChatAppContect = React.createContext();

export const ChatAppProvider = ({ Children }) => {
// USESTATE
    const [account, setAccount] = useState("");
    const [userName, setUserName] = useState("");
    const [friendLists, setFriendLists] = useState([]);
    const [friendMsg, setFriendMsg] = useState([]);
    const [loading, setLoading] = useState(false);
    const [userLists, setUserLists] = useState([]);
    const [error, setError] = useState("");

    // chat user data
    const [currentUserName, setCurrentUserName] = useState("");
    const [currentUserAddress, setCurrentUserAddress] = useState("");

    const router = useRouter();

    // Fetch data time of page load

    const fetchData = async () => {
        try{
            //  get contract
            const contract = await connectingWithContract();

            //  get account
            const connectAccount = await connectWallet();
            setAccount(connectAccount);

            // get username
            // const userName = await contract.getUsername(connectAccount);
            // setUserName(userName);

            // Get my friend list
            const friendLists = await contract.getMyFriendList();
            setFriendLists(friendLists);

            // get all app userlist
            const userlist = await contract.getAllAppUser();
            setUserLists(userLists);
        } catch (error) {
            setError("Please install and Connect your wallet");
        }
    };
    // After this a MetaMask Popup should appear
    useEffect(() => {
        fetchData();
    }, []);

    // Read Message
    const readMessage = async(friendAddress)=>{
        try {
            const contract = await connectingWithContract();
            const read = await contract.readMessage(friendAddress);
            setFriendMsg(read);
        }   catch (error) {
            setError("Currently You Have No Message");
    
        }
    };
    
    // create account 
    const createAccount = async({ name, accountAddress }) =>{
        try {
            if(name || accountAddress) 
            return setError("Name And Account, cannot be empty");

            const contract = await connectingWithContract();
            const getCreatedUser = await contract.createAccount(name);
            setLoading(true);
            await getCreatedUser.wait();
            setLoading(false);
            window.location.reload();
        }   catch (error) {
            setError("Error while creating your account Pleae reload browser");
        }
    };

    // add your friends
    const addFriends = async ({ name, accountAddress }) => {
        try {
            if (name || accountAddress) return setError("Please provide data");

            const contract = await connectingWithContract();
            const addMyFriend = await contract.addFriend(accountAddress, name);
            setLoading(true);
            await addMyFriend.wait();
            setLoading(false);
            router.push("/");
            window.location.reload();
        } catch (error) {
            setError("Something went Wrong while adding friends,try again");
        }
    };

    // send message to your friend
    const sendMessage = async ({ msg, address }) => {
        try{
            if (msg || address) return setError("Please Type Your Message");

            const contract = await connectingWithContract();
            const addMessage = await contract.sendMessage(address, msg);
            setLoading(true);
            await addMessage.wait();
            setLoading(fale);
            window.location.reload();
        } catch (error) {
            setError("Please reload and try again");
        }    
    };    

    //  read info
    const readUser = async (userAddress) => {
        const contract = await connectingWithContract();
        const userName = await contract.getUsername(userAddress);
        setCurrentUserName(userName);
        setCurrentUserAddress(userAddress);
    };
    return(
        <ChatAppContect.Provider 
        value={{
            readMessage, 
            createAccount, 
            addFriends, 
            sendMessage, 
            readUser, 
            connectWallet,
            CheckIfWalletConnected,
            account, 
            userName, 
            friendLists, 
            friendMsg, 
            userLists, 
            loading, 
            error, 
            currentUserName, 
            currentUserAddress,}}
        >
            {Children}
        </ChatAppContect.Provider>
    );
};                     

