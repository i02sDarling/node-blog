const Token = require('./shaToken');
const crypto = require('crypto')

function encodePassword(pd) {
    const hs = crypto.createHash('sha256');
    hs.update(pd + Token);
    return hs.digest('hex');
}

module.exports = encodePassword;