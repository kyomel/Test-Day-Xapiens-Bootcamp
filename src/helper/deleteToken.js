const token = require('./token');
let { User } = require('../db/models');


const deleteToken = async () => {
    let datas = await User.update({
        $unset: { token: 1 }, function (err, user) {
            if(err) return datas(err);
            datas(null, user);
        }
    })
}

module.exports = deleteToken;