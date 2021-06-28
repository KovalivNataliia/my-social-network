import classNames from './PostsItemPhoto.module.css'

const PostItemPhoto = (props) => {
    return (
        <img className={classNames.photo} src={props.photo} alt="" />
    );
}

export default PostItemPhoto