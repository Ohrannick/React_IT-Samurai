import React from 'react'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

  // const postsElements = props.posts.map ( p => <Post message={p.message} source= {p.source} likesCount={p.likesCount} />)

  const newPostElement = React.createRef();

  const addPost = () => {
    if (props.newPostText) {
      props.dispatch(addPostActionCreator());
    }
    return
  }

  const onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  }

  return (
      <div className={s.item}>
        <h3>My posts</h3>
        <div>
          <div>
            <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>            
          </div>
          <button onClick={ addPost }>Add post</button>
        </div>
        <div className={s.posts}>
          {props.posts.map ( p => <Post message={p.message} source= {p.source} likesCount={p.likesCount} />)}
        </div>
      </div>
  )
}

export default MyPosts