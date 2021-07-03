const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData: [
        { id: 1, message: 'Hello!', likes: 5, photo: "https://img.icons8.com/dusk/2x/finn--v1.png" },
        { id: 2, message: 'I have a great mood!', likes: 10, photo: "https://img.icons8.com/dusk/2x/stich--v1.png" },
        { id: 3, message: 'This is my first app', likes: 50, photo: "https://img.icons8.com/dusk/2x/futurama-fry.png" },
        { id: 4, message: 'Hello, how are you?', likes: 3, photo: "https://img.icons8.com/dusk/2x/iron-man.png" },
        { id: 5, message: 'DATTEBAYO', likes: 15, photo: "https://img.icons8.com/dusk/2x/naruto.png" },
    ],
    newPostText: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_POST:
            let newPost = {
                id: 6,
                message: state.newPostText,
                likes: 0,
                photo: "https://img.icons8.com/dusk/2x/finn--v1.png"
            };

            state.postsData.push(newPost);
            state.newPostText = '';
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;

        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;