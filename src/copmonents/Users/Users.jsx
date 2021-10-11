import React from 'react';
import style from './Users.module.css'

let Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {id: 3,
      followed: false,
      fullname: "Sveta",
      img: "http://hypeava.ru/uploads/posts/2019-07/1563002947_1.jpg",
      status: "I'm a Hugo Boss",
      location: {
        city: "Moskow",
        country: "Russia",
      },
      },
      {id: 4,
        name: "Sasha",
        followed: true,
        img: "https://i.pinimg.com/736x/ec/47/62/ec47624e43faa7ebb8b5042b5158ab13.jpg",
        status: "I'm a Boss",
        location: {
          city: "Minsk",
          country: "Belarus",
        },
      },
      {id: 5,
        followed: false,
        name: "Victor",
        img: "https://www.meme-arsenal.com/memes/0978206358a772255b494b839659c3fa.jpg",
        status: "I'm a little Boss",
        location: {
          city: "Kiev",
          country: "Ukrain",
        },
      },
    ])
  }
  
  return (
    <div className={style.users}>
      {props.users.map((u) => (
        <div className={style.user} key={u.id}>
          <div>
            <div> 
              <img src={ u.img } className={style.avatar} alt="avatar" />
            </div>
            <div>
              { u.followed 
                ? <button onClick={ () => {props.follow(u.id)} } >Follow</button> 
                : <button onClick={ () => {props.unfollow(u.id)} } >Unfollow</button> }
            </div>
          </div>
          <div>
            <span>
              <div> { u.fullname } </div>
              <div> { u.status } </div>
            </span>
              <div> { u.location.country } </div>
              <div> { u.location.city } </div>
          </div>
        </div>))}
    </div>
  )
}

export default Users