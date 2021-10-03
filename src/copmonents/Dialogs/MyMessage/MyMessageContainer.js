import React from "react";
import {
  addMessageCreator,
  updateNewMessageTextCreator,
} from "../../../redux/dialog-reducer";
import MyMessage from "./MyMessage";

const MyMessageContainer = (props) => {
  let state = props.store.getState();

  const addMessage = () => {
    props.store.dispatch(addMessageCreator());
  };

  const onMessageChange = (text) => {
    let action = updateNewMessageTextCreator(text);
    props.store.dispatch(action);
  };

  return (
    <MyMessage
      addMessage={addMessage}
      updateNewMessageText={onMessageChange}
      messages={state.dialogsPage.messages}
      newMessageText={state.dialogsPage.newMessageText}
    />
  );
};

export default MyMessageContainer;
