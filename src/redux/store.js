import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";
import profileReducer from "./profile-reducer";

let store = {
    _state: {
        navbar: {
            navElements: [
                { id: 1, link: "/profile", name: "Profile", icon: "https://img.icons8.com/bubbles/2x/test-account.png" },
                { id: 2, link: "/dialogs", name: "Messages", icon: "https://img.icons8.com/bubbles/2x/important-mail.png" },
                { id: 3, link: "/news", name: "News", icon: "https://img.icons8.com/bubbles/2x/america.png" },
                { id: 4, link: "/music", name: "Music", icon: "https://img.icons8.com/bubbles/2x/musical-notes.png" },
                { id: 5, link: "/settings", name: "Settings", icon: "https://img.icons8.com/bubbles/2x/gears.png" },
            ],
        },

        profile: {
            postsData: [
                { id: 1, message: 'Hello!', likes: 5, photo: "https://img.icons8.com/dusk/2x/finn--v1.png" },
                { id: 2, message: 'I have a great mood!', likes: 10, photo: "https://img.icons8.com/dusk/2x/stich--v1.png" },
                { id: 3, message: 'This is my first app', likes: 50, photo: "https://img.icons8.com/dusk/2x/futurama-fry.png" },
                { id: 4, message: 'Hello, how are you?', likes: 3, photo: "https://img.icons8.com/dusk/2x/iron-man.png" },
                { id: 5, message: 'DATTEBAYO', likes: 15, photo: "https://img.icons8.com/dusk/2x/naruto.png" },
            ],
            newPostText: '',
        },

        dialogs: {
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
        },
    },

    _rerenderEntireTree() {
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },

    dispatch(action) {
        this._state.profile = profileReducer(this._state.profile, action);
        this._state.dialogs = dialogsReducer(this._state.dialogs, action);
        this._state.navbar = navbarReducer(this._state.navbar, action);

        this._rerenderEntireTree(this._state);
    }
}


export { store }