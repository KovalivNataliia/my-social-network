import { connect } from 'react-redux';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../../../../redux/dialogs-reducer';
import MessagesSendingForm from './MessagesSendingForm';

// const MessagesSendingFormContainer = (props) => {

//     let state = props.store.getState();

//     let onMessageCreate = () => {
//         props.store.dispatch(addMessageActionCreator());
//     }

//     let onMessageChange = (text) => {
//         props.store.dispatch(updateNewMessageTextActionCreator(text));
//     }


//     return (
//         <MessagesSendingForm updateNewMessageText={ onMessageChange } onMessageCreate={ onMessageCreate } newMessageText={state.dialogs.newMessageText}/>
//     );
// }

let mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogs.newMessageText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextActionCreator(text));
        },
        onMessageCreate: () => {
            dispatch(addMessageActionCreator());
        }
    }
}

const MessagesSendingFormContainer = connect(mapStateToProps, mapDispatchToProps)(MessagesSendingForm);


export default MessagesSendingFormContainer