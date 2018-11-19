import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import loginReducer from './login';
import organizationOverview from './organization';
import sideMenuReducer from './sideMenu';
import organizationDetailsReducer from './organizationDetails';
import usersReducer from './users';

const rootReducer = combineReducers({
  loginReducer,
  organizationOverview,
  sideMenuReducer,
  organizationDetailsReducer,
  usersReducer,
  form: formReducer,
});

export default rootReducer;
