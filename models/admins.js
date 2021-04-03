let db = require('../configDb');

module.exports.getParams = function(callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT * FROM parametres;";
               // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};