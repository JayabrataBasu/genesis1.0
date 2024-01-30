<<<<<<< HEAD

import React from 'react'
=======
import React, { useState, useContext } from 'react';
import image from"next/image";

// internal import
import Style from './Friend.module.css';
import images from '../../assets';
import Card from "./Card/Card";
import Chat from './Chat/Chat';

import {ChatAppContect} from "../../Context/ChatAppContext";

const Friend = () => {
    // const array = [1, 2, 34, 5, 6];

    const {
        SendMessage,
        account,
        friendLists,
        readMessage,
        userName,
        loading,
        currentUserName,
        currentUserAddress,
        readUser,
    } = useContext(ChatAppContect);
    console.log(friendLists);
    return (
        <div className={Style.Friend}>
            <div className={Style.Friend_box}>
                <div className={Style.Friend_box_left}>{}</div>
                    {friendLists.map((el, i)=> (
                        <Card
                            key={i + 1}
                            el={eL}
                            i={i}
                            readMessage={readMessage}
                            readUser={readUser}
                        />    

                    ))}
                </div>    
                <div className={Style.Friend_box_right}></div>
                    <Chat
                        functionName={sendMessage}
                        readMessage={readMessage}
                        friendMsg={friendMsg}
                        account={account}
                        userName={userName}
                        loading={loading}
                        currrentUserName={currentUserName}
                        currentUserAddress={currentUserAddress} 
                    />   
                        
                    
            </div> 
        
    )
};

export default Friend;