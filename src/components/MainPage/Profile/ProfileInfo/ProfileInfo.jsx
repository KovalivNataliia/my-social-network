import classNames from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div className={classNames.content}>
            <div className={classNames.bg}>
                <div className={classNames.profilePhoto}>
                    <img src="https://img.icons8.com/bubbles/2x/jake.png" alt="" />
                </div>
                <div className={classNames.info}>
                    description
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo