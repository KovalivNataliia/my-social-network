import classNames from './Post.module.css'

const Post = () => {
    return (
        <div className={classNames.post}>
            <img src="https://icon-library.com/images/cute-icon/cute-icon-29.jpg" alt="" />
            <div className={classNames.text}>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <button>Like</button>
        </div>
    );
}

export default Post