import React, { useState, useContext } from 'react';
import Image from "next/image";
import Style from './Filter.module.css';
import images from "../../assets";
import { ChatAppContact } from '../../Context/ChatAppContext';
import { Model } from '../index';

const Filter = () => {
    
    const { account, addFriends } = useContext(ChatAppContact);
    const [addFriend, setAddFriend] = useState(false);
    return(
        <div className={Style.Filter}>
            <div className={Style.Filter_box}>
                <div className={Style.Filter_box_left}>
                    <div className={Style.Filter_box_left_search}>
                        <Image src={images.search} alt="image" width={20} height={20}/>
                        <input type="text" placeholder="search.." />
                    </div>
                </div>
                <div className={Style.Filter_box_right}>
                    <button>
                        <Image src={images.clear} alt="clear" width={20} height={20}/>
                    </button>
                    <button>
                        <Image src={images.clear} alt="clear" width={20} height={20}/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Filter;