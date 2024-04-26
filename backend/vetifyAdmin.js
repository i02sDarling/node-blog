const userData = require('./mockdata/userData');
const crypto = require('crypto')

function decodePassword(pd) {
    const hs = crypto.createHash('sha256');
    hs.update(pd);
    return hs.digest('hex');
}

function getUsr(username, password) {
    let is_vertify = false;
    username = username.trim();
    password = password.trim();
    let fakeUser = [userData[0]];
    let user = userData.filter(user => {
        if (user.username === username && user.password === decodePassword(password) && user.is_admin === true) {
            is_vertify = true;
            return user;
        }
    });


    return is_vertify ? user : fakeUser;

}

module.exports = getUsr;