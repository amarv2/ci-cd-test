import { sideMenuConstants } from '../constants/sideMenuConstants';

const initialState = {
    expandedMenu: false
};

export function sideMenuReducer(state = initialState, action) {
    switch (action.type) {
    case sideMenuConstants.MENU_TOGGLE:
        return Object.assign({}, state, {
            expandedMenu: !state.expandedMenu
        });
    default:
        return state;
    }
}
