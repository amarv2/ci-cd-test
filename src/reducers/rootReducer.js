import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { loginReducer } from './loginReducer';
import { organizationOverview } from './organizationReducer';
import { sideMenuReducer } from './sideMenuReducer';

const rootReducer = combineReducers({
    loginReducer,
    organizationOverview,
    sideMenuReducer,
    form: formReducer
});

export default rootReducer;
