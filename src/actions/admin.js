import adminUserConstants from '../constants/admin';
import adminUserService from '../services/adminUserService/adminUserService';

const logout = () => {
  adminUserService.logout();
  return { type: adminUserConstants.LOGOUT };
};

const adminUserActions = {
  logout,
};

export default adminUserActions;
