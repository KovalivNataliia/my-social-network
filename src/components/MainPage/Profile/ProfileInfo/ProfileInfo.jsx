import classNames from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div className={classNames.content}>
            <img src="https://png.pngtree.com/thumb_back/fw800/back_pic/04/05/46/90580cca18c50e5.jpg" alt=""></img>
            <div className={classNames.info}>
                Ava + description
            </div>
        </div>
    );
}

export default ProfileInfo