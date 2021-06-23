import classNames from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <li className={classNames.dialogs_item}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </li>
    );
}

const Message = (props) => {
    return (
        <li className={classNames.messages_item}>
            {props.message}
        </li>
    );
}

let dialogsData = [
    {id: 1, name: 'Mother'},
    {id: 2, name: 'Nastya'},
    {id: 3, name: 'Sviatoslav'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Vova'}
]

let messagesData = [
    {id: 1, message: 'Hello!'},
    {id: 2, message: 'How is your mood?'},
    {id: 3, message: 'Where are you from?'},
    {id: 4, message: 'See you later!'},
    {id: 5, message: 'Yo'}
]

let dialogElement = dialogsData.map( dialog => {
    return <DialogItem name={dialog.name} id={dialog.id} />
})

let messageElement = messagesData.map( message => {
    return <Message message={message.message} />
})


const Dialogs = (props) => {
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