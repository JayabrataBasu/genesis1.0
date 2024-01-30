import Link from "next/link";

// internal import
import Style from "./Card.module.css";
import images from "../../../assets";

const Card = ({ readMessage, eL, i, readUser }) => {
  console.log(eL);
  return (
    <Link
      href={{ pathname: "/", query: `${eL.name}`, address: `${eL.pubkey}` }}
    >
      <div
        className={Style.Card}
        onClick={() => (readMessage(el.pubkey), readUser(el.pubkey))}
      ></div>

      <div className={Style.Card_box}>
        <div className={Style.Card_box_left}></div>
        <Image
          src={images.accountName}
          src={images.accountName}
          alt="userName"
          width={50}
          height={50}
          className={Style.Card_box_left_img}
        />
      </div>
      <div className={Style.Card_box_right}>
        <div className={Style.Card_box_right_middle}>
          <h4>{el.name}</h4>
          <small>{el.pubkey.slice(21)}..</small>
        </div>
        <div className={Style.Card_box_right_end}>
          <small>{i + 1}</small>
        </div>
      </div>
    </Link>
  );
};

export default Card;
