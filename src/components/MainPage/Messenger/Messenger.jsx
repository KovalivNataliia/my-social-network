import classNames from './Messenger.module.css'
import Dialogs from './Dialogs/Dialogs'
import Messages from './Messages/Messages'


const Messenger = (props) => {
    return (
        <div className={classNames.content}>
            <Dialogs store={props.store} />
            <Messages store={props.store} />
        </div>
    );
}

export default Messenger