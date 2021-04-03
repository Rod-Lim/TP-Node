
let model = require("../models/vip.js");
let async = require('async');

// ///////////////////////// R E P E R T O I R E    D E S     S T A R S
 
module.exports.Repertoire = 	function(request, response){
 response.title = 'Répertoire des stars';
 let lettre = request.query.lettre;
 let id = request.query.id;
 if (id == undefined) {
     id = 0;
 } 
 async.parallel ([
    function (callback){
        model.repertoire(function(err, result) {callback(null,result)});
    },
    function (callback){
        model.getImagesEtNoms(lettre, (function(err, result) {callback(null,result)}));
    },
    function (callback){
        model.getDetailsFromId(id, (function(err, result) {callback(null,result)}));
    },
    function (callback){
        model.getNationalite(id, (function(err, result) {callback(null,result)}));
    },
    function (callback){
        model.getCouturier(id, (function(err, result) {callback(null,result)}));
    },
    function (callback){
        model.getMannequin(id, (function(err, result) {callback(null,result)}));
    },
    function (callback){
        model.getChanteur(id, (function(err, result) {callback(null,result)}));
    },
    function (callback){
        model.getActeur(id, (function(err, result) {callback(null,result)}));
    },
    function (callback){
        model.getRealisateur(id, (function(err, result) {callback(null,result)}));
    },
    function (callback){
        model.getMariage(id, (function(err, result) {callback(null,result)}));
    },
    function (callback){
        model.getLiaison(id, (function(err, result) {callback(null,result)}));
    },   
    function (callback){
        model.getFilmJoue(id, (function(err, result) {callback(null,result)}));
    },
    function (callback){
        model.getFilmReal(id, (function(err, result) {callback(null,result)}));
    },
    function (callback){
        model.getImagesFromId(id, (function(err, result) {callback(null,result)}));
    },
    function (callback){
        model.getDefileFaits(id, (function(err, result) {callback(null,result)}));
    },
    function (callback){
        model.getAlbums(id, (function(err, result) {callback(null,result)}));
    },
],
 function(err, result){ 
    if (err) {
       console.log(err);
       return;
    }
    response.lettres = result[0];
    response.imagesEtNoms = result[1]; 
    response.infos = result[2];
    response.nationalite = result[3];
    response.couturier = result[4];
    response.mannequin = result[5];
    response.chanteur = result[6];
    response.acteur = result[7];
    response.realisateur = result[8];
    response.mariage = result[9];
    response.liaison = result[10];
    response.filmJoue = result[11];
    response.filmReal = result[12];
    response.images = result[13];
    response.defileFaits = result[14];
    response.albums = result[15];

    

    /*for (let index = 2; index < result.length; index++) {
        console.log(result[index]);     
    }*/

    response.render('repertoireVips', response);
 });
}