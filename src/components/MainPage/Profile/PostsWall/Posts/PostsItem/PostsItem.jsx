import classNames from './PostsItem.module.css'
import PostItemLikes from './PostsItemLikes/PostsItemLikes';
import PostItemPhoto from './PostsItemPhoto/PostsItemPhoto';
import PostItemText from './PostsItemText/PostsItemText';

const PostItem = (props) => {
    return (
        <div className={classNames.post}>
            <PostItemPhoto photo={props.photo}/>
            <PostItemText message={props.message}/>
            <PostItemLikes likes={props.likes}/>
        </div>
    );
}

export default PostItem