import React from "react";
import Dialog from "./Dialog/dialog";
import s from "./DialogItem.module.css";

const DialogItem = (props) => {
  return (
    <div className={s.dialog}>
      {props.dialogs.map((d) => (
        <Dialog name={d.name} id={d.id} img={d.img} key={d.id} />
      ))}
    </div>
  );
};

export default DialogItem;
