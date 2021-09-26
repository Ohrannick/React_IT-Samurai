import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
  return (
    <div>
      <div className={s.item}><img src={props.source} alt='ava'/> {props.message}
        <span>&#128077; - {props.likesCount}</span>
      </div>
    </div>
  )
}

export default Post