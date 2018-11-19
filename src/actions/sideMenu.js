import sideMenuConstants from '../constants/sideMenu';

const toggleMenu = () => ({ type: sideMenuConstants.MENU_TOGGLE });

const sideMenuActions = {
  toggleMenu,
};

export default sideMenuActions;
