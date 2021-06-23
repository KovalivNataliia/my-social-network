import classNames from './Posts.module.css'
import Post from './Post/Post';

let postsData = [
    {id: 1, message: 'Hello!', likes: 5},
    {id: 2, message: 'I have a great mood!', likes: 10},
    {id: 3, message: 'This is my first app', likes: 50},
    {id: 4, message: 'Hello, how are you?', likes: 3},
    {id: 5, message: 'Yo', likes: 15}
]

let postElement = postsData.map( post => {
    return <Post massage = {post.message} likes = {post.likes}/>
})

const Posts = () => {
    return (
        <div className={classNames.posts}>
            <h2>My Posts</h2>
            <div className={classNames.post_input}>
                <input type="text" />
                <button>Create post</button>
            </div>
            <div className={classNames.all_posts}>
                { postElement }
            </div>
        </div>
    );
}

export default Posts