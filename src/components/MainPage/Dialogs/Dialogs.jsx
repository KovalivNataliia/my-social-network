import classNames from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Messages from './Messages/Messages'


const Dialogs = (props) => {
    
    let dialogElement = props.dialogsData.map( dialog => {
        return <DialogItem name={dialog.name} id={dialog.id} />
    })
    
    let messageElement = props.messagesData.map( message => {
        return <Messages message={message.message} />
    })


    return (
        <div className={classNames.content}>
            <h2>Dialogs</h2>
            <div className={classNames.dialogs}>
                <ul>
                    {dialogElement}
                </ul>
            </div>
            <div className={classNames.messages}>
                <ul>
                    {messageElement}
                </ul>
            </div>
        </div>
    );
}

export default Dialogs