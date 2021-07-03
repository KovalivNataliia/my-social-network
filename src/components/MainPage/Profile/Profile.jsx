import classNames from './Profile.module.css'
import PostsWall from './PostsWall/PostsWall'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
    return (
        <div className={classNames.content}>
            <ProfileInfo />
            <PostsWall store={props.store}/>
        </div>
    );
}

export default Profile