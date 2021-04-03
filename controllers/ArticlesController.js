let model = require("../models/articles.js");
let async = require('async');

// LISTER ARTICLES

module.exports.ListerArticles = function(request, response){
    response.title = 'Articles des stars';
    let id = request.query.id;
    if (id == undefined) {
        id = 0;
    } 
    async.parallel ([
        function (callback){
            model.getUnArticle(function(err, result) {callback(null,result)});
        },
        function (callback){
            model.getArticleFromId(id, (function(err, result) {callback(null,result)}));
        },
    ],
    function(err, result){ 
        if (err) {
           console.log(err);
           return;
        }
        response.unArticle = result[0];
        response.articleVip = result[1];
        
    
        for (let index = 0; index < result.length; index++) {
            console.log(result[index]);     
        }
    
        response.render('articles', response);
   });
}
 