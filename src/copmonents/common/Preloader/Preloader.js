import React from "react";
import preloader from "../../../assets/images/Spinner-1.5s-128px.svg";
import style from "./Preloader.module.css";

let Preloader = () => {
  return (
    <div className={style.position}>
      <img src={preloader} alt="preloader" />
    </div>
  );
};

export default Preloader;
