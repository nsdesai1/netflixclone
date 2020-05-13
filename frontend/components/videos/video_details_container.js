import { connect } from 'react-redux';
import { fetchVideo } from '../../actions/video_actions';
import { withRouter } from 'react-router-dom';
import VideoDetails from './video_details';

const msp = (state, ownProps) => {
    const video = state.entities.videos[ownProps.match.params.movieId];
    const users = state.entities.users;
    const currentUserId = state.session.currentUserId;
      
    return {
      video,
      genres: state.entities.genres,
      currentUserId,
      users,
      watched
    };
};
  
const mdp = dispatch => ({
    fetchVideo: id => dispatch(fetchVideo(id)),
});
  
export default withRouter(connect(msp, mdp)(VideoDetails));