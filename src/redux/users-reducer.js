const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    usersData: [
        {
            id: 1,
            name: 'Mother',
            photo: "https://img.icons8.com/dusk/2x/futurama-leela.png",
            followed: true,
            location: { city: 'Lviv,', country: 'Ukraine' },
            status: 'If you turned the page, I burned the book!'
        },
        {
            id: 2,
            name: 'Nastya',
            photo: "https://img.icons8.com/dusk/2x/jake--v1.png",
            followed: true,
            location: { city: 'Lviv,', country: 'Ukraine' },
            status: 'Character is not measured by appearance, nor happiness by smile.'
        },
        {
            id: 3,
            name: 'Sviatoslav',
            photo: "https://img.icons8.com/dusk/2x/homer-simpson--v1.png",
            followed: false,
            location: { city: 'Lviv,', country: 'Ukraine' },
            status: 'The world is real, people are the ones who are fake.'
        },
        {
            id: 4,
            name: 'Sasha',
            photo: "https://img.icons8.com/dusk/2x/darth-vader.png",
            followed: true,
            location: { city: 'Lviv,', country: 'Ukraine' },
            status: "If you can't do everything, do everything you can."
        },
        {
            id: 5,
            name: 'Vova',
            photo: "https://img.icons8.com/dusk/2x/futurama-bender--v1.png",
            followed: true,
            location: { city: 'Lviv,', country: 'Ukraine' },
            status: 'Go. And if you are scared, you are really scared.'
        },
    ],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(user => user.id === action.usersId ? {...user, followed: true} : user)
            }
        case UNFOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(user => user.id === action.usersId ? {...user, followed: false} : user)
            }
        case SET_USERS:
            return {
                ...state,
                usersData: [...state.usersData, ...action.users]
            }
        default:
            return state;
    }
}

export const followActionCreator = (usersId) => ({ type: FOLLOW, usersId });
export const unfollowActionCreator = (usersId) => ({ type: UNFOLLOW, usersId });
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users });

export default usersReducer;