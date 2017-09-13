const db = require('../db/config');
const User = {};


User.create = user => {
    return db.one(`
    INSERT INTO users
    (username, password_digest, display_name, email, firstname, lastname)
    VALUES ($1, $2, $3, $4, 0, 100)
    RETURNING *
    `,[user.username, user.password_digest, user.displayName, user.email, user.firstname, user.lastname]);
};

module.exports = User;