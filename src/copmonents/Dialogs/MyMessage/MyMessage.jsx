import React from "react";
import Message from "./Message/Message";
import s from "./MyMessage.module.css";

const MyMessage = (props) => {
  let messagesElements = props.messages.map((m) => (
    <Message message={m.message} id={m.id} key={m.id}/>
  ));

  const newMessage = React.createRef();

  const addMessage = () => {
    if (props.newMessageText) {
      props.addMessage();
    }
    return;
  };

  const onMessageChange = () => {
    let text = newMessage.current.value;
    props.updateNewMessageText(text);
  };

  return (
    <div className={s.messages}>
      {messagesElements}
      <input
        onChange={onMessageChange}
        ref={newMessage}
        value={props.newMessageText}
        placeholder="Enter new message"
      ></input>
      <button onClick={addMessage}>Add message</button>
    </div>
  );
};

export default MyMessage;
