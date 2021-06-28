import classNames from './MessagesItem.module.css'

const MessagesItem = (props) => {
    return (
        <li className={classNames.messages_item}>
            {props.message}
        </li>
    );
}


export default MessagesItem