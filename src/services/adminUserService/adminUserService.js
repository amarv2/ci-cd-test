import { history } from '../../utils/History/history';


function login(username, password) {
    const user = {
        username,
        password,
        token: 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDU0OTcwNiwiZW1haWwiOiJuYW1pay5jYXRpYnVzaWNAZ21haWwuY29tIiwiaWF0IjoxNTM5MDcyMjcyfQ.9CwBUj0Xfb7eV_2blvmcNvMIQqPSdnuW_BvqyxE55gc'
    }
    localStorage.setItem('adminUser', JSON.stringify(user))
    return new Promise((resolve) => {
        setTimeout(resolve, 100, user);
    })
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('adminUser');
    history.go('/login');
}

export const adminUserService = {
    login,
    logout,
};
