import classNames from './PostsCreatingForm.module.css'


const PostsCreatingForm = (props) => {
    return (
        <div className={classNames.post_input}>
            <input type="text" className={classNames.input} />
            <button className={classNames.btn}>Create post</button>
        </div>
    );
}

export default PostsCreatingForm