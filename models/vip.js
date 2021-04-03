let db = require('../configDb');

module.exports.test = function(callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT COUNT(*) AS NB FROM vip ;";
               // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.repertoire = function(callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT DISTINCT SUBSTRING(VIP_NOM, 1 , 1) AS permLettreNom FROM vip ORDER BY permLettreNom;";
               // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.getImagesEtNoms = function(lettre, callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT PHOTO_ADRESSE AS photos, v.VIP_NOM, v.VIP_PRENOM, v.VIP_NUMERO FROM photo p JOIN vip v ON v.VIP_NUMERO = p.VIP_NUMERO WHERE SUBSTRING(v.VIP_NOM, 1 , 1) = '"+lettre+"' AND PHOTO_NUMERO = 1;";
               // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.getDetailsFromId = function(id, callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT * FROM vip WHERE VIP_NUMERO = "+id+";";
               // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.getNationalite = function(id, callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT v.VIP_NUMERO,n.NATIONALITE_NOM FROM vip v JOIN NATIONALITE n ON v.NATIONALITE_NUMERO = n.NATIONALITE_NUMERO WHERE VIP_NUMERO = "+id+";";
               // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.getCouturier = function(id, callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT c.VIP_NUMERO,d.DEFILE_NUMERO,d.DEFILE_LIEU,d.DEFILE_DATE FROM couturier c JOIN defile d ON c.VIP_NUMERO = d.VIP_NUMERO WHERE c.VIP_NUMERO = "+id+";";
               // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.getMannequin = function(id, callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT * FROM mannequin WHERE VIP_NUMERO = "+id+";";
               // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.getChanteur = function(id, callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT * FROM chanteur WHERE VIP_NUMERO = "+id+";";
               // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.getActeur = function(id, callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT * FROM acteur WHERE VIP_NUMERO = "+id+";";
               // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.getRealisateur = function(id, callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT * FROM realisateur WHERE VIP_NUMERO = "+id+";";
               // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.getFilmJoue = function(id, callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT f.FILM_NUMERO,f.VIP_NUMERO,f.FILM_TITRE,f.FILM_DATEREALISATION,v.VIP_NOM,v.VIP_PRENOM FROM film f JOIN joue j ON j.FILM_NUMERO = f.FILM_NUMERO JOIN vip v ON f.VIP_NUMERO = v.VIP_NUMERO WHERE j.VIP_NUMERO = "+id+";";
               // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.getFilmReal = function(id, callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT FILM_NUMERO,VIP_NUMERO,FILM_TITRE,FILM_DATEREALISATION FROM film WHERE VIP_NUMERO = "+id+";";
               // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.getMariage = function(id, callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT m.VIP_VIP_NUMERO,v.VIP_NOM,v.VIP_PRENOM,m.DATE_EVENEMENT,m.MARIAGE_LIEU,m.MARIAGE_FIN,m.MARIAGE_MOTIFFIN FROM mariage m JOIN vip v ON v.VIP_NUMERO = m.VIP_VIP_NUMERO WHERE m.VIP_NUMERO = "+id+";";
               // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.getLiaison = function(id, callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT l.VIP_VIP_NUMERO,v.VIP_NOM,v.VIP_PRENOM,l.DATE_EVENEMENT,l.LIAISON_MOTIFFIN FROM liaison l JOIN vip v ON v.VIP_NUMERO = l.VIP_VIP_NUMERO WHERE l.VIP_NUMERO = "+id+";";
               // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.getImagesFromId = function(id, callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT PHOTO_SUJET,PHOTO_ADRESSE,PHOTO_NUMERO FROM photo p JOIN vip v ON v.VIP_NUMERO = p.VIP_NUMERO WHERE v.VIP_NUMERO = "+id+";";
               // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.getDefileFaits = function(id, callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT v.VIP_NUMERO,v.VIP_NOM,v.VIP_PRENOM,d.DEFILE_LIEU,d.DEFILE_DATE FROM defile d JOIN defiledans de ON d.DEFILE_NUMERO = de.DEFILE_NUMERO JOIN vip v ON d.VIP_NUMERO = v.VIP_NUMERO WHERE de.VIP_NUMERO = "+id+";";
               // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.getAlbums = function(id, callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT a.ALBUM_TITRE,a.ALBUM_DATE,m.MAISONDISQUE_NOM FROM album a JOIN maisondisque m ON m.MAISONDISQUE_NUMERO = a.MAISONDISQUE_NUMERO JOIN composer c ON c.ALBUM_NUMERO = a.ALBUM_NUMERO WHERE c.VIP_NUMERO = "+id+";";
               // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};