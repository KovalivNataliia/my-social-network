import classNames from './Post.module.css'

const Post = (props) => {
    return (
        <div className={classNames.post}>
            <img className={classNames.photo} src="https://img.icons8.com/color/2x/cat-profile.png" alt="" />
            <div className={classNames.text}>
                <p>{props.massage}</p>
            </div>
            <button className={classNames.btn}>
                <img className={classNames.likes} src="https://img.icons8.com/flat-round/2x/hearts.png" alt="" />
                <span>{props.likes}</span>
            </button>
        </div>
    );
}

export default Post