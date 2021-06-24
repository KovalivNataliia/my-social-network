import classNames from './Messages.module.css'

const Messages = (props) => {
    return (
        <li className={classNames.messages_item}>
            {props.message}
        </li>
    );
}


export default Messages