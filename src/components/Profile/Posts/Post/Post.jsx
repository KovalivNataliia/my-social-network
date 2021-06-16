import classNames from './Post.module.css'

const Post = (props) => {
    return (
        <div className={classNames.post}>
            <img src="https://icon-library.com/images/cute-icon/cute-icon-29.jpg" alt="" />
            <div className={classNames.text}>
                <p>{props.massage}</p>
            </div>
            <button>Like <span>{props.likes}</span></button>
        </div>
    );
}

export default Post