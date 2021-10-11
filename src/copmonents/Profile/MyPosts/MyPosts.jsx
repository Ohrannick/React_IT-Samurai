import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

  let postsElements = props.posts.map ( p => <Post message={p.message} source={p.source} likesCount={p.likesCount} key={p.id}/>)

  let newPostElement = React.createRef();

  let onAddPost = () => {
    if (props.newPostText) {
      props.addPost();
    }
    return
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
      <div className={s.item}>
        <h3>My posts</h3>
        <div>
          <div>
            <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}placeholder='Enter new post' />            
          </div>
          <button onClick={onAddPost}>Add post</button>
        </div>
        <div className={s.posts}>
          { postsElements }
        </div>
      </div>
  )
}

export default MyPosts