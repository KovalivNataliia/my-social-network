import classNames from './Posts.module.css'
import PostsItem from './PostsItem/PostsItem'


const Posts = (props) => {

    let postElement = props.postsData.map(post => {
        return <PostsItem message={post.message} likes={post.likes} photo={post.photo}/>
    })

    return (
        <div className={classNames.all_posts}>
            {postElement}
        </div>
    );
}

export default Posts