
let model = require("../models/albums.js");
let async = require('async');

// ////////////////////// L I S T E R     A L B U M S

module.exports.ListerAlbum = 	function(request, response){
   response.title = 'Album des stars';
   let id = request.query.id;
   if (id == undefined) {
      id = 0;
   } 
   let idPhoto = request.query.idPhoto;
   if (idPhoto == undefined) {
       idPhoto = 0;
   }
   async.parallel ([
      function (callback){
        model.getImagesNumeroUn(function(err, result) {callback(null,result)});
      },
      function (callback){
        model.getAlbumFromId(id,idPhoto, (function(err, result) {callback(null,result)}));
      },
      function (callback){
        model.getLastVip(function(err, result) {callback(null,result)});
      },
      function (callback){
        model.getLastPhoto(id, (function(err, result) {callback(null,result)}));
      },
    
  ],
  function(err, result){ 
      if (err) {
         console.log(err);
         return;
      }
       
      response.photosUn = result[0];
      response.albumVip = result[1];
      response.lastVip = result[2];
      response.lastPhoto = result[3];
  
      for (let index = 0; index < result.length; index++) {
          console.log(result[index]);     
      }
  
      response.render('listerAlbum', response);
 });
}