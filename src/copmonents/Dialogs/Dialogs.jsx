import React from 'react'
import s from './Dialogs.module.css'
import MyMessageContainer from './MyMessage/MyMessageContainer'
import DialogItemContainer from './DialogItem/DialogItemContainer'


const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <DialogItemContainer />
      <MyMessageContainer />
    </div>
  )
}

export default Dialogs