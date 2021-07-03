import React from 'react';
import classNames from './PostsCreatingForm.module.css'


const PostsCreatingForm = (props) => {

    let newPostsItem = React.createRef();

    let onPostCreate = () => {
        props.onPostCreate();
    }

    let onPostChange = () => {
        let text = newPostsItem.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={classNames.post_input}>
            <input onChange={ onPostChange } ref={newPostsItem} type="text" className={classNames.input} value={props.newPostText}/>
            <button onClick={ onPostCreate } className={classNames.btn}>Create post</button>
        </div>
    );
}

export default PostsCreatingForm