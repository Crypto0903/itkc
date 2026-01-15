const db = require("../config/db");

exports.findUserByUsername = (username, callback) => {
  const sql = `
    SELECT u.*, r.role_name 
    FROM users u 
    JOIN roles r ON u.role_id = r.role_id 
    WHERE u.username = ?
  `;
  db.query(sql, [username], callback);
};

exports.createUser = (username, passwordHash, roleId, callback) => {
  const sql = `
    INSERT INTO users (username, password_hash, role_id)
    VALUES (?, ?, ?)
  `;
  db.query(sql, [username, passwordHash, roleId], callback);
};
