import classNames from './MessagesSendingForm.module.css'

const MessagesSendingForm = (props) => {
    return (
        <div className={classNames.send_form}>
            <input type="text" className={classNames.input} />
            <button className={classNames.btn}>Send</button>
        </div>
    );
}


export default MessagesSendingForm