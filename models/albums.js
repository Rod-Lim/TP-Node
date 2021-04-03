let db = require('../configDb');

module.exports.getImagesNumeroUn = function(callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT * FROM photo WHERE PHOTO_NUMERO = 1;";
               // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.getAlbumFromId = function(id,photo, callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT * FROM photo WHERE VIP_NUMERO = "+id+" AND PHOTO_NUMERO = "+photo+";";
               // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.getLastVip = function(callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT MAX(VIP_NUMERO) as VIP_NUMERO FROM photo;";
               // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.getLastPhoto = function(id, callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT MAX(PHOTO_NUMERO) as PHOTO_NUMERO FROM photo WHERE VIP_NUMERO = "+id+";";
               // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};