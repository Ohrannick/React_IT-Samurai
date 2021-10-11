import React from "react";
import { NavLink } from "react-router-dom";
import s from "./dialog.module.css";

const Dialog = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.item} activeClassName={s.active}>
      <img src={props.img} alt="avatar" />
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default Dialog;
