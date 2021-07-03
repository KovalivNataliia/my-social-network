const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogsData: [
        { id: 1, name: 'Mother', photo: "https://img.icons8.com/dusk/2x/futurama-leela.png" },
        { id: 2, name: 'Nastya', photo: "https://img.icons8.com/dusk/2x/jake--v1.png" },
        { id: 3, name: 'Sviatoslav', photo: "https://img.icons8.com/dusk/2x/homer-simpson--v1.png" },
        { id: 4, name: 'Sasha', photo: "https://img.icons8.com/dusk/2x/darth-vader.png" },
        { id: 5, name: 'Vova', photo: "https://img.icons8.com/dusk/2x/futurama-bender--v1.png" },
    ],
    messagesData: [
        { id: 1, message: 'Hello!' },
        { id: 2, message: 'How is your mood?' },
        { id: 3, message: 'Where are you from?' },
        { id: 4, message: 'See you later!' },
        { id: 5, message: 'Yo' },
    ],
    newMessageText: '',
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_MESSAGE:
            let newMessage = {
                id: 6,
                message: state.newMessageText,
            };

            state.messagesData.push(newMessage);
            state.newMessageText = '';
            return state;

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;

        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });

export default dialogsReducer;