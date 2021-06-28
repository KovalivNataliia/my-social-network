import classNames from './ProfileInfo.module.css'
import ProfileInfoPhoto from './ProfileInfoPhoto/ProfileInfoPhoto';
import ProfileInfoDescription from './ProfileInfoDescription/ProfileInfoDescription';


const ProfileInfo = () => {
    return (
        <div className={classNames.content}>
            <div className={classNames.bg}>
                <ProfileInfoPhoto />
                <ProfileInfoDescription />
            </div>
        </div>
    );
}

export default ProfileInfo