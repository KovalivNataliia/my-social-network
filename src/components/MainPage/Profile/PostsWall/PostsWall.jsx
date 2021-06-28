import classNames from './PostsWall.module.css'
import PostsCreatingForm from './PostsCreatingForm/PostsCreatingForm'
import Posts from './Posts/Posts'


const PostsWall = (props) => {
    return (
        <div className={classNames.posts}>
            <h2>My Posts</h2>
            <PostsCreatingForm />
            <Posts postsData={props.postsData}/>
        </div>
    );
}

export default PostsWall