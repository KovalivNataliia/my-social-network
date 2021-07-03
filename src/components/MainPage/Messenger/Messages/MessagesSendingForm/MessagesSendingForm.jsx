import classNames from './MessagesSendingForm.module.css'
import React from 'react';

const MessagesSendingForm = (props) => {

    let newMessagesItem = React.createRef();
    
    let onMessageCreate = () => {
        props.onMessageCreate();
    }

    let onMessageChange = () => {
        let text = newMessagesItem.current.value;
        props.updateNewMessageText(text);
    }


    return (
        <div className={classNames.send_form}>
            <input onChange={onMessageChange} ref={newMessagesItem} type="text" className={classNames.input} value={props.newMessageText}/>
            <button className={classNames.btn} onClick={ onMessageCreate }>Send</button>
        </div>
    );
}


export default MessagesSendingForm