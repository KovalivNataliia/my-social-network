import classNames from './Messages.module.css'
import MessagesItem from './MessagesItem/MessagesItem'
import MessagesSendingFormContainer from './MessagesSendingForm/MessagesSendingFormContainer'

const Messages = (props) => {

    let messageElement = props.messagesData.map(message => {
        return <MessagesItem message={message.message} />
    })

    return (
        <div className={classNames.messages}>
            <ul>
                {messageElement}
            </ul>
            <MessagesSendingFormContainer />
        </div>
    );
}


export default Messages