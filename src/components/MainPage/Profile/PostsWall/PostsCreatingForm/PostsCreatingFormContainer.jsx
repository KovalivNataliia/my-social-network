import PostsCreatingForm from './PostsCreatingForm';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../../redux/profile-reducer';
import { connect } from 'react-redux';

// const PostsCreatingFormContainer = (props) => {
    
//     let state = props.store.getState();

//     let onPostCreate = () => {
//         props.store.dispatch(addPostActionCreator());
//     }

//     let onPostChange = (text) => {
//         props.store.dispatch(updateNewPostTextActionCreator(text));
//     }

//     return (
//         <PostsCreatingForm updateNewPostText={ onPostChange } onPostCreate={ onPostCreate } newPostText={state.profile.newPostText}/>
//     );
// }

let mapStateToProps = (state) => {
    return {
        newPostText: state.profile.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        },
        onPostCreate: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const PostsCreatingFormContainer = connect(mapStateToProps, mapDispatchToProps)(PostsCreatingForm);



export default PostsCreatingFormContainer