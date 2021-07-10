import classNames from './Messenger.module.css'
import MessagesContainer from './Messages/MessagesContainer'
import DialogsContainer from './Dialogs/DialogsContainer';


const Messenger = (props) => {
    return (
        <div className={classNames.content}>
            <DialogsContainer />
            <MessagesContainer />
        </div>
    );
}

export default Messenger