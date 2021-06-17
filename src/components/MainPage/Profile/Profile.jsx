import classNames from './Profile.module.css'
import Posts from './Posts/Posts';


const Profile = () => {
    return (
        <div className={classNames.content}>
            <img src="https://png.pngtree.com/thumb_back/fw800/back_pic/04/05/46/90580cca18c50e5.jpg" alt=""></img>
            <Posts />
        </div>
    );
}

export default Profile