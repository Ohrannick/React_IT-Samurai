import React from 'react'
import Dialog from './Dialog/dialog';
import s from './DialogItem.module.css'

const DialogItem = (props) => {
  let state = props.store.getState();

  return (
    <div className={s.dialog}>
      {state.dialogsPage.dialogs.map((d) => (
        <Dialog name={d.name} id={d.id} img={d.img} />
      ))}
    </div>   
  )
}

export default DialogItem

