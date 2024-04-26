const userData = require('../mockdata/userData');
const getPassword = require('../lib/encodePassword')

function getUsr(username, password) {
    let is_vertify = false;
    username = username.trim();
    password = password.trim();
    console.log('user request:vertifyAdmin.js',username,password);
    console.log(getPassword('123'));
    console.log(userData[1].password);
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