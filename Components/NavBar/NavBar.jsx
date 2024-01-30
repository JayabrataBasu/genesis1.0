import React, { useEffect, useState, useContext } from "react";
import Image from "next/image";
import Link from "next/link";

//INTERNAL IMPORT
import Style from "./NavBar.module.css";
import { ChapAppContact } from "../../Context/ChatAppContext";
import { Model, Error } from "../index";
import images from "../../assets";

//INTERNAL IMPORT
import Style from "./NavBar.module.css";
import { ChatAppContect } from "@/app/Context/ChatAppContext";
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

  const { account, userName } = useContext(ChatAppContect);
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
                key={1 + 1}
                className={
                  '${Style.NavBar_box_right_menu_items}${active == i+1 ? Style.active_btn : ""}}'
                }
              ></div>
            ))}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default NavBar;
