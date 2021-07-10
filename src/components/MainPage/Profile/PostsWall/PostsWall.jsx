import classNames from './PostsWall.module.css'
import PostsCreatingFormContainer from './PostsCreatingForm/PostsCreatingFormContainer'
import PostsContainer from './Posts/PostsContainer'


const PostsWall = (props) => {
    return (
        <div className={classNames.posts}>
            <h2>My Posts</h2>
            <PostsCreatingFormContainer />
            <PostsContainer />
        </div>
    );
}

export default PostsWall