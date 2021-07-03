import MessagesSendingForm from './MessagesSendingForm';
import React from 'react';
import { updateNewMessageTextActionCreator, addMessageActionCreator } from '../../../../../redux/dialogs-reducer'; 

const MessagesSendingFormContainer = (props) => {

    let state = props.store.getState();

    let onMessageCreate = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    }


    return (
        <MessagesSendingForm updateNewMessageText={ onMessageChange } onMessageCreate={ onMessageCreate } newMessageText={state.dialogs.newMessageText}/>
    );
}


export default MessagesSendingFormContainer