import classNames from './Messages.module.css'
import MessagesItem from './MessagesItem/MessagesItem'
import MessagesSendingForm from './MessagesSendingForm/MessagesSendingForm'

const Messages = (props) => {

    let messageElement = props.messagesData.map(message => {
        return <MessagesItem message={message.message} />
    })

    return (
        <div className={classNames.messages}>
            <ul>
                {messageElement}
            </ul>
            <MessagesSendingForm />
        </div>
    );
}


export default Messages