import { connect } from 'react-redux';
import DialogItem from './DialogItem';

let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
  }
}

let mapDispatchToProps = () => {
  return {};
}

const DialogItemContainer = connect(mapStateToProps, mapDispatchToProps)(DialogItem);

export default DialogItemContainer

