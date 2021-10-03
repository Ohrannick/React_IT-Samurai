import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import MyMessageContainer from './MyMessage/MyMessageContainer'


const Dialogs = (props) => {
  debugger
  return (
    <div className={s.dialogs}>
      <DialogItem store = {props.store} />
      <MyMessageContainer store = {props.store}/>
    </div>
  )
}

export default Dialogs