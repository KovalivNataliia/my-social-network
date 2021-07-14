let initialState = {
    navElements: [
        { id: 1, link: "/profile", name: "Profile", icon: "https://img.icons8.com/bubbles/2x/test-account.png" },
        { id: 2, link: "/users", name: "Users", icon: "https://img.icons8.com/bubbles/2x/group.png" },
        { id: 3, link: "/dialogs", name: "Messages", icon: "https://img.icons8.com/bubbles/2x/important-mail.png" },
        { id: 4, link: "/news", name: "News", icon: "https://img.icons8.com/bubbles/2x/america.png" },
        { id: 5, link: "/music", name: "Music", icon: "https://img.icons8.com/bubbles/2x/musical-notes.png" },
        { id: 6, link: "/settings", name: "Settings", icon: "https://img.icons8.com/bubbles/2x/gears.png" },
    ],
}

const navbarReducer = (state = initialState, action) => {

    return state;
}

export default navbarReducer;