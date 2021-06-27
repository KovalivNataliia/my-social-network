let state = {
    profile: {
        postsData: [
            { id: 1, message: 'Hello!', likes: 5 },
            { id: 2, message: 'I have a great mood!', likes: 10 },
            { id: 3, message: 'This is my first app', likes: 50 },
            { id: 4, message: 'Hello, how are you?', likes: 3 },
            { id: 5, message: 'Yo', likes: 15 },
        ],
    },
    dialogs: {
        dialogsData: [
            { id: 1, name: 'Mother' },
            { id: 2, name: 'Nastya' },
            { id: 3, name: 'Sviatoslav' },
            { id: 4, name: 'Sasha' },
            { id: 5, name: 'Vova' },
        ],
        messagesData: [
            { id: 1, message: 'Hello!' },
            { id: 2, message: 'How is your mood?' },
            { id: 3, message: 'Where are you from?' },
            { id: 4, message: 'See you later!' },
            { id: 5, message: 'Yo' },
        ],
    },
}

export { state }