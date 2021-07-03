import classNames from './Messages.module.css'
import MessagesItem from './MessagesItem/MessagesItem'
import MessagesSendingFormContainer from './MessagesSendingForm/MessagesSendingFormContainer'

const Messages = (props) => {

    let messagesData = props.store.getState().dialogs.messagesData;

    let messageElement = messagesData.map(message => {
        return <MessagesItem message={message.message} />
    })

    return (
        <div className={classNames.messages}>
            <ul>
                {messageElement}
            </ul>
            <MessagesSendingFormContainer store={props.store}/>
        </div>
    );
}


export default Messages