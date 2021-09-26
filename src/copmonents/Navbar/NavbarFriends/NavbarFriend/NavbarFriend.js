import s from "./NavbarFriend.module.css";

const NavbarFriend = (props) => {
  return (
    <div className={s.friend}>
      <img src={props.img} alt="avatar" />
      <span>{props.name}</span>
    </div>
  );
};

export default NavbarFriend;
