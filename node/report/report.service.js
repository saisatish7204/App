const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const { secret } = require('config.json');
const db = require('_helpers/db');

module.exports = {
    create
};


async function create(params) {
    // // validate
    // if (await db.User.findOne({ where: { username: params.username } })) {
    //     throw 'Username "' + params.username + '" is already taken';
    // }

    // // hash password
    // if (params.password) {
    //     params.hash = await bcrypt.hash(params.password, 10);
    // }

    // save user
    await db.Report.create(params);
}
