import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'
import NavbarFriendsContainer from './NavbarFriends/NavbarFriendsContainer'

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <div>
          <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
        </div>
        <div>
          <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
        </div>
        <div>
          <NavLink to="/news" activeClassName={s.active}>News</NavLink>
        </div>
        <div>
          <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
        </div>
        <div>
          <NavLink to="/setting" activeClassName={s.active}>Setting</NavLink>
        </div>
        <div>
          <NavLink to="/game" activeClassName={s.active}>Game</NavLink>
        </div>
        <br/>
        <div>
          <NavLink to="/friends" className={s.friends} activeClassName={s.active}>Friends</NavLink>
          <NavbarFriendsContainer />
        </div>
        <br />
        <div>
          <NavLink to="/users" activeClassName={s.active}>Users</NavLink>
        </div>
      </div>
    </nav>    
  )
}

export default Navbar