import classNames from './Posts.module.css'
import PostsItem from './PostsItem/PostsItem'


const Posts = (props) => {

    let postsData = props.store.getState().profile.postsData;

    let postElement = postsData.map(post => {
        return <PostsItem message={post.message} likes={post.likes} photo={post.photo}/>
    })

    return (
        <div className={classNames.all_posts}>
            {postElement}
        </div>
    );
}

export default Posts