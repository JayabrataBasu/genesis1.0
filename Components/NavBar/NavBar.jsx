import React, { useEffect, useState, useContext} from "react";
import Image from "next/image";
import Link from "next/link";

//INTERNAL IMPORT
import Style from "./NavBar.module.css";
import {ChapAppContact} from "../../Context/ChatAppContext";
import {Model, Error} from "../index";
import images from "../../assets";

//INTERNAL IMPORT
import Style from "./NavBar.module.css";
import { ChatAppContect } from "@/app/Context/ChatAppContext";
const NavBar = () => {
    const menuItems = [
        {
            menu: "All Users",
            link:"alluser"
        },
        {
            menu: "CHAT",
            link:"/"
        },{
            menu: "CONTACT",
            link:"/"
        },{
            menu: "SETTING",
            link:"/"
        },
        {
            menu: "FAQ",
            link:"/"
        }
    ]
    //USESTATE
    const[active, setActive] = useState(2);
    const[open, setOpen]= useState(false);
    const[openModel, setOpenModel]=useState(false);

    const{account, userName}=useContext(ChatAppContect)
    return (
        <div className ={Style.NavBar}>
            <div className = {Style.NavBar_box}></div>
        </div>
    );
};

export default NavBar;