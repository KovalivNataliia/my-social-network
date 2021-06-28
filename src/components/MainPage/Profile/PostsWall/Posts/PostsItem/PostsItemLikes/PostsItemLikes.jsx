import classNames from './PostsItemLikes.module.css'

const PostItemLikes = (props) => {
    return (
        <button className={classNames.btn}>
            <img className={classNames.likes} src="https://img.icons8.com/flat-round/2x/hearts.png" alt="" />
            <span>{props.likes}</span>
        </button>
    );
}

export default PostItemLikes