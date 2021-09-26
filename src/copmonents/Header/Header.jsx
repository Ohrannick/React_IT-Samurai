import React from "react";
import s from './Header.module.css'

const Header = () => {
  return (
    <header className={s.header}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNsGrO4lNvTaCmg-DVajdu80dbdVcW-ue5zg&usqp=CAU"
        alt="logo"
      ></img>
    </header>    
  )
}

export default Header