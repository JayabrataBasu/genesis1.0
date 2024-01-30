

import Link from "next/link";

// internal import
import Style from "./Card.module.css";
import images from "../../../assets";

const Card = ({ readMessage, eL, i, readUser}) => {
    console.log(eL);
    return (
        <Link href={{pathname: '/', query: `${eL.name}`, address: `${eL.pubkey}` }}>

        </Link>
    );
};

export default Card;
