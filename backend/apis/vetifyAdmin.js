const userData = require('../mockdata/userData');
const getPassword = require('../lib/encodePassword')

function getUsr(username, password) {
    let is_vertify = false;
    username = username.trim();
    password = password.trim();
    let fakeUser = [userData[0]];
    let user = userData.filter(user => {
        if (user.username === username && user.password === getPassword(password) && user.is_admin === true) {
            is_vertify = true;
            return user;
        }
    });


    return is_vertify ? user : fakeUser;

}

module.exports = getUsr;