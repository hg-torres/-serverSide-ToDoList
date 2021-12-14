const mysql = require('mysql2')

const db = mysql.createConnection('mysql1://root:rootroot@localhost:3306/toDo_db')

module.exports = db