import React from "react";
import Header from "./Header";
import { setAuthUserData } from "../../redux/auth-reducer";
import { connect } from "react-redux";
import { usersAPI } from "../../api/api";

class HeaderContainer extends React.Component {
  componentDidMount() {
    usersAPI.getUser().then((data) => {
      if (data.resultCode === 0) {
        let { email, id, login } = data.data;
        this.props.setAuthUserData(id, email, login);
      }
    });
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  email: state.auth.email,
});

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
