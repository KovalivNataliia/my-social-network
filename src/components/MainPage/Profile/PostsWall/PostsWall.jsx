import classNames from './PostsWall.module.css'
import PostsCreatingFormContainer from './PostsCreatingForm/PostsCreatingFormContainer'
import Posts from './Posts/Posts'


const PostsWall = (props) => {
    return (
        <div className={classNames.posts}>
            <h2>My Posts</h2>
            <PostsCreatingFormContainer store={props.store}/>
            <Posts store={props.store}/>
        </div>
    );
}

export default PostsWall