import classNames from './Posts.module.css'
import Post from './Post/Post';

const Posts = () => {
    return (
        <div className={classNames.posts}>
            <h2>My Posts</h2>
            <div className={classNames.post_input}>
                <input type="text" />
                <button>Create post</button>
            </div>
            <div className={classNames.all_posts}>
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
}

export default Posts