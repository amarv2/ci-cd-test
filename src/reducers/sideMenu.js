import sideMenuConstants from '../constants/sideMenu';

const initialState = {
  expandedMenu: false,
};

export default function sideMenuReducer(state = initialState, action) {
  switch (action.type) {
    case sideMenuConstants.MENU_TOGGLE:
      return {
        ...state,
        expandedMenu: !state.expandedMenu,
      };
    default:
      return state;
  }
}
