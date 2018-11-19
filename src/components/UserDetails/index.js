import { connect } from 'react-redux';
import userActions from '../../actions/user';
import UserDetails from './UserDetails';

function mapDispatchToProps(dispatch) {
  return {
    toggleEditMode: () => {
      dispatch(userActions.toggleEditMode());
    },
  };
}


function mapStateToProps(state) {
  const { isEditing } = state.usersReducer;
  return {
    isEditing,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
