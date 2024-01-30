import React, { useEffect, useState, useContext } from "react";
import Image from "next/image";
import Link from "next/link";

//INTERNAL IMPORT
import Style from "./NavBar.module.css";
import { ChapAppContact } from "../../Context/ChatAppContext";
import { Model, Error } from "../index";
import images from "../../assets";
import { connectWallet } from "@/Utils/apiFeatures";


const NavBar = () => {
  const menuItems = [
    {
      menu: "All Users",
      link: "alluser",
    },
    {
      menu: "CHAT",
      link: "/",
    },
    {
      menu: "CONTACT",
      link: "/",
    },
    {
      menu: "SETTING",
      link: "/",
    },
    {
      menu: "FAQ",
      link: "/",
    },
  ];

  //USESTATE
  const [active, setActive] = useState(2);
  const [open, setOpen] = useState(false);
  const [openModel, setOpenModel] = useState(false);

  const { account, userName, connectWallet, createAccount, error } = useContext(ChatAppContect);
  return (
    <div className={Style.NavBar}>
      <div className={Style.NavBar_box}>
        <div className={Style.NavBar_box_left}>
          <Image src={images.logo} alt="logo" width={50} height={50} />
        </div>
        <div className={Style.NavBar_box_right}>
          <div className={Style.NavBar_box_right_menu}>
            {menuItems.map((el, i) => (
              <div
                onClick={() => setActive(i + 1)}
                key={i + 1}
                className={
                  '${Style.NavBar_box_right_menu_items}${active == i+1 ? Style.active_btn : ""}'}
                >
                <Link className={Style.NavBar_box_right_menu_items_link} href={el.link}>{el.menu}
                </Link>
              </div>
            ))}

          </div>
          {open && (
            <div className={Style.mobile_menu}>
            {menuItems.map((el, i) => (
              <div
                onClick={() => setActive(i + 1)}
                key={i + 1}
                className={'${Style.mobile_menu_items} ${active == i+1 ? Style.active_btn : ""}'}
                >
                <Link className={Style.mobile_menu_items_link} href={el.link}>{el.menu}
                </Link>
              </div>
            ))}
            <p className={Style.mobile_menu_btn}>
              <Image 
              src={images.close} 
              alt="close" 
              height={50} 
              width={50} 
              onClick={() => setOpen(false)} 
              />
            </p>
          </div>
          )}

          <div className={Style.NavBar_box_right_connect}>
            {account == "" ? (
              <button onClick={() => connectWallet()}>
                {""}
                <span>Connect Wallet</span>
              </button>
            ) : (
              <button onClick={() => setOpenModel(true)}>
                {""}
                <Image src={userName ? images.accountName : images.create2}
                alt="Account Image"
                width={20}
                height={20}
                />
                {''}
                <small>{userName || "Create Account"}</small>
              </button>
            )}
          </div>

          <div 
          className={Style.NavBar_box_right_open}  
          onClick={()=> setOpen(true)}
          >
            <Image src={images.open} alt="open" width={30} height={30} />
          </div>
        </div>
        <div></div>
      </div>

      //MODEL COMPONENT
      {openModel && (
        <div className={Style.modelbox}>
          <Model openModel={setOpenModel}
          title="WELCOME TO"
          head="CHATTY"
          info='Bla Bla Bla Bla Bla'
          smallinfo='Select your name:'
          images={images.hero}
          functionName={createAccount}
          />
        </div>
      )}
      {error == "" ? "" : <Error error={error} />}
    </div>
  );
};

export default NavBar;
