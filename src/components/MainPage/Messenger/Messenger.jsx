import classNames from './Messenger.module.css'
import Dialogs from './Dialogs/Dialogs'
import Messages from './Messages/Messages'


const Messenger = (props) => {

    // let messageElement = props.dialogs.messagesData.map(message => {
    //     return <Messages message={message.message} />
    // })


    return (
        <div className={classNames.content}>
            <Dialogs dialogsData={props.dialogs.dialogsData} />
            <Messages messagesData={props.dialogs.messagesData} />
            {/* <div className={classNames.messages}>
                <ul>
                    {messageElement}
                </ul>
                <div className={classNames.send_form}>
                    <input type="text" className={classNames.input} />
                    <button className={classNames.btn}>Send</button>
                </div>
            </div> */}
        </div>
    );
}

export default Messenger