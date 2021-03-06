import React from "react";
import Header from "./Header";
import { getAuthUser } from "../../redux/auth-reducer";
import { connect } from "react-redux";
class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthUser();
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

export default connect(mapStateToProps, { getAuthUser })(HeaderContainer);
