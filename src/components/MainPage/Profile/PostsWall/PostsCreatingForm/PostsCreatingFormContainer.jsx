import React from 'react';
import PostsCreatingForm from './PostsCreatingForm';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../../redux/profile-reducer';

const PostsCreatingFormContainer = (props) => {
    
    let state = props.store.getState();

    let onPostCreate = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <PostsCreatingForm updateNewPostText={ onPostChange } onPostCreate={ onPostCreate } newPostText={state.profile.newPostText}/>
    );
}

export default PostsCreatingFormContainer