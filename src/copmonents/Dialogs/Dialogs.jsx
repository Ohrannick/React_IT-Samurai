import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import MyMessage from './MyMessage/MyMessage'


const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <DialogItem dialogs={props.dialogsPage.dialogs} />
      <MyMessage messages={props.dialogsPage.messages}
      dispatch={props.dispatch}
      newMessageText={props.dialogsPage.newMessageText} />
    </div>
  )
}

export default Dialogs