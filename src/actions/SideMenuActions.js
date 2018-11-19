import { sideMenuConstants } from '../constants/sideMenuConstants';


function toggleMenu() {
    return {
        type: sideMenuConstants.MENU_TOGGLE
    };
}

export const sideMenuActions = {
    toggleMenu
};
