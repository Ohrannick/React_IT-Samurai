import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import DialogItem from "./DialogItem";

let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
  };
};

let mapDispatchToProps = () => {
  return {};
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(DialogItem);
