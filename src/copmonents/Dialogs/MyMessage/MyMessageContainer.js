import { connect } from "react-redux";
import {
  addMessageCreator,
  updateNewMessageTextCreator,
} from "../../../redux/dialog-reducer";
import MyMessage from "./MyMessage";

let mapStateToProps = (state) => {
  return {
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: (text) => {
      dispatch(updateNewMessageTextCreator(text));
    },
    addMessage: () => {
      dispatch(addMessageCreator());
    },
  };
};

const MyMessageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyMessage);

export default MyMessageContainer;
