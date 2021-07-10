import { connect } from 'react-redux'
import Posts from './Posts'

let mapStateToProps = (state) => {
    return {
        postsData: state.profile.postsData
    }
}


const PostsContainer = connect(mapStateToProps)(Posts)

export default PostsContainer