import classNames from './Users.module.css'


const Users = (props) => {

    let userElement = props.users.map(user => {
        return (
            <div className={classNames.user} key={user.id}>
                <div className={classNames.info}>
                    <img src={user.photo} className={classNames.photo} alt="" />
                    <div>
                        <h3 className={classNames.name} >{user.name}</h3>
                        <p className={classNames.location} >{user.city} {user.country}</p>
                    </div>
                </div>
                <p className={classNames.status} >{user.status}</p>
                {user.followed
                    ? <button className={classNames.btn} onClick={() => { props.unfollow(user.id) }}>Unfollow</button>
                    : <button className={classNames.btn} onClick={() => { props.follow(user.id) }}>Follow</button>}
            </div>
        );
    })

    return (
        <div className={classNames.users}>
            {userElement}
            <button className={classNames.more_btn}>Show more</button>
        </div>
    );
}

export default Users