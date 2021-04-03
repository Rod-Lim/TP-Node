let db = require('../configDb');

module.exports.getUnArticle = function(callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT DISTINCT v.VIP_NUMERO,v.VIP_NOM,v.VIP_PRENOM FROM vip v JOIN apoursujet a ON v.VIP_NUMERO = a.VIP_NUMERO;";
               // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.getArticleFromId = function(id, callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT a.EXEMPLAIRE_NUMERO, a.ARTICLE_TITRE, a.ARTICLE_NUMEROPAGEDEBUT,a.ARTICLE_RESUME,a.ARTICLE_DATE_INSERT,e.EXEMPLAIRE_DATEPUBLICATION,v.VIP_NOM,v.VIP_PRENOM,v.VIP_NUMERO FROM article a JOIN  apoursujet ap ON ap.ARTICLE_NUMERO = a.ARTICLE_NUMERO JOIN exemplaire e ON e.EXEMPLAIRE_NUMERO = a.EXEMPLAIRE_NUMERO JOIN vip v ON v.VIP_NUMERO = ap.VIP_NUMERO WHERE ap.VIP_NUMERO = "+id+";";
               // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};