import classNames from './Posts.module.css'
import Post from './Post/Post'


const Posts = (props) => {

    let postElement = props.postsData.map( post => {
        return <Post massage = {post.message} likes = {post.likes}/>
    })

    return (
        <div className={classNames.posts}>
            <h2>My Posts</h2>
            <div className={classNames.post_input}>
                <input type="text" />
                <button className={classNames.btn}>Create post</button>
            </div>
            <div className={classNames.all_posts}>
                { postElement }
            </div>
        </div>
    );
}

export default Posts