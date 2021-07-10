import { connect } from 'react-redux'
import Messages from './Messages'

let mapStateToProps = (state) => {
    return {
        messagesData: state.dialogs.messagesData
    }
}

const MessagesContainer = connect(mapStateToProps)(Messages)

export default MessagesContainer