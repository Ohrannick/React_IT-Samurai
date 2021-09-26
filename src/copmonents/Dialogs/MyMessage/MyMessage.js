import React from "react";
import {
  addMessageCreator,
  updateNewMessageTextCreator,
} from "../../../redux/dialog-reducer";
import Message from "./Message/Message";
import s from "./MyMessage.module.css";

const MyMessage = (props) => {
  // const newMessage = React.createRef();

  const addMessage = () => {
    if (props.newMessageText) {
      props.dispatch(addMessageCreator());
    }
    return;
  };

  const onMessageChange = (e) => {
    let text = e.target.value;
    props.dispatch(updateNewMessageTextCreator(text));
  };

  return (
    <div className={s.messages}>
      {props.messages.map((m) => (
        <Message message={m.message} id={m.id} />
      ))}
      <input
        onChange={onMessageChange}
        // ref={newMessage}
        value={props.newMessageText}
      ></input>
      <button onClick={addMessage}>Add message</button>
    </div>
  );
};

export default MyMessage;
