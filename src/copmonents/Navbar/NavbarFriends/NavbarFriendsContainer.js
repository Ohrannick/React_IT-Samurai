import { connect } from "react-redux";
import NavbarFriends from "./NavbarFriends";

let mapStateToProps = (state) => {
  return {
    friends: state.navbarPage.friends,
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
