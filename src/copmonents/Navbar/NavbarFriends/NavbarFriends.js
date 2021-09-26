import NavbarFriend from "./NavbarFriend/NavbarFriend";
import s from "./NavbarFriends.module.css";

const NavbarFriends = (props) => {
  return (
    <div className={s.friends}>
      {props.state.friends.map((f) => (
        <NavbarFriend id={f.id} name={f.name} img={f.img} />
      ))}
    </div>
  );
};

export default NavbarFriends;
