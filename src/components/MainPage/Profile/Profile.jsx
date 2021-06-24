import classNames from './Profile.module.css'
import Posts from './Posts/Posts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
    return (
        <div className={classNames.content}>
            <ProfileInfo />
            <Posts postsData={props.postsData}/>
        </div>
    );
}

export default Profile