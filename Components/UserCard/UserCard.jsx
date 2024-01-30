import React from "react";
import Image from "next/image";

import Style from './UserCard.module.css';
import images from '../../assets';
const UserCard =({el, i, addFriends}) => {
    console.log(el);
    return(
        <div className={Style.UserCard}>
            <div className={Style.UserCard}>
                <Image 
                className={Style.UserCard_box_img}
                 src={images['image${i+1}']}
                 alt="user"
                 width={100}
                 hight={100}
                />
            <div className={Style.UserCard_box_info}>
                <h3>{el.name}</h3>
                <p>{el.accountAddress.slice(0,25)}..</p>
                <button onClick={()=>addFriends({name: el.name, accountAddress: el.
                    accountAddress})
                }
            > 
              Add Friend
            </button>
        </div>
    </div>

    <small className={Style.number}>{i+1}</small>
</div> );
};

