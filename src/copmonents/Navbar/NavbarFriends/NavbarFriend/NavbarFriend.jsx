import s from "./NavbarFriend.module.css";
import userPhoto from "../../../../assets/images/image-4.jpeg";

const NavbarFriend = (props) => {
  return (
    <div className={s.friend}>
      <img src={props.img != null ? props.img : userPhoto} alt="avatar" />
      <span>{props.name.slice(0, 8)}</span>
    </div>
  );
};

export default NavbarFriend;
