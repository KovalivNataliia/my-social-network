import classNames from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Messages from './Messages/Messages'


const Dialogs = (props) => {

    let dialogElement = props.dialogs.dialogsData.map(dialog => {
        return <DialogItem name={dialog.name} id={dialog.id} />
    })

    let messageElement = props.dialogs.messagesData.map(message => {
        return <Messages message={message.message} />
    })


    return (
        <div className={classNames.content}>
            <div className={classNames.dialogs}>
                <ul>
                    {dialogElement}
                </ul>
            </div>
            <div className={classNames.messages}>
                <ul>
                    {messageElement}
                </ul>
                <div className={classNames.send_form}>
                    <input type="text" className={classNames.input} />
                    <button className={classNames.btn}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs