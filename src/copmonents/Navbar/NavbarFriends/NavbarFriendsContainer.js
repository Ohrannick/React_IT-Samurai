import { connect } from "react-redux";
import NavbarFriends from "./NavbarFriends";

let mapStateToProps = (state) => {
  return {
    // friends: state.navbarPage.friends,
    friends: state.usersPage.users,
  };
};

let mapDispatchToProps = () => {
  return {};
};

const NavbarFriendsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarFriends);

export default NavbarFriendsContainer;
