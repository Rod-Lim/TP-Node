
let model = require("../models/admins.js");
let async = require('async');
let Cryptr = require('cryptr');
let cryptr = new Cryptr('MaSuperCléDeChiffrementDeouF');


module.exports.Connexion = function(request, response){
    response.title = "Paramètres";
    if (request.query.mdp == undefined) {
        if (request.session.mdp == undefined) {
            request.session.mdp = "7";
        }
    } else {
        request.session.mdp = request.query.mdp;
    }
    
    async.parallel ([
        function (callback){
          model.getParams(function(err, result) {callback(null,result)});
        },
    ],
    function(err, result){ 
        if (err) {
           console.log(err);
           return;
        }
         
        console.log(result[0]);
        if (cryptr.decrypt(result[0][0].PASSWD) == request.session.mdp) {
            response.params = result[0];
            response.render('home', response);
        } else {
            response.params = undefined;
            response.render('home', response);
        }
        
    });
}

module.exports.Vips = function(request, response){
    response.title = "Vips";
    if (request.query.mdp == undefined) {
        if (request.session.mdp == undefined) {
            request.session.mdp = "7";
        }
    } else {
        request.session.mdp = request.query.mdp;
    }
    
    async.parallel ([
        function (callback){
            model.getParams(function(err, result) {callback(null,result)});
        },
    ],
    function(err, result){ 
        if (err) {
           console.log(err);
           return;
        }
         
        if (cryptr.decrypt(result[0][0].PASSWD) == request.session.mdp) {
            response.params = result[0];
            response.render('vips', response);
        } else {
            response.params = undefined;
            response.render('connexion', response);
        }
        
    });
}

module.exports.Photos = function(request, response){
    response.title = "Photos";
    if (request.query.mdp == undefined) {
        if (request.session.mdp == undefined) {
            request.session.mdp = "7";
        }
    } else {
        request.session.mdp = request.query.mdp;
    }
    
    async.parallel ([
        function (callback){
          model.getParams(function(err, result) {callback(null,result)});
        },
    ],
    function(err, result){ 
        if (err) {
           console.log(err);
           return;
        }
         
        if (cryptr.decrypt(result[0][0].PASSWD) == request.session.mdp) {
            response.params = result[0];
            response.render('photos', response);
        } else {
            response.params = undefined;
            response.render('connexion', response);
        }
        
    });
}

