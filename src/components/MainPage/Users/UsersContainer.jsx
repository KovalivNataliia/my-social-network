import Users from './Users'
import { connect } from 'react-redux';
import { followActionCreator, setUsersActionCreator, unfollowActionCreator} from '../../../redux/users-reducer';


let mapStateToProps = (state) => {
    return {
        users: state.users.usersData,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (usersId) => {
            dispatch(followActionCreator(usersId))
        },
        unfollow: (usersId) => {
            dispatch(unfollowActionCreator(usersId))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer