import classNames from './PostsItemText.module.css'

const PostItemText = (props) => {
    return (
        <div className={classNames.text}>
            <p>{props.message}</p>
        </div>
    );
}

export default PostItemText