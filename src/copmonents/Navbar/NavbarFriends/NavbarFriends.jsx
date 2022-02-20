import NavbarFriend from "./NavbarFriend/NavbarFriend";
import s from "./NavbarFriends.module.css";

const NavbarFriends = (props) => {
  return (
    <div className={s.friends}>
      {props.friends.map((f) => {
        return f.followed ? (
          <NavbarFriend
            id={f.id}
            name={f.name}
            img={f.photos.small}
            key={f.id}
          />
        ) : (
          ""
        );
      })}
    </div>
  );
};

export default NavbarFriends;
