let HomeController = require('./../controllers/HomeController');
let VipController = require('./../controllers/VipController');
let AlbumController = require('./../controllers/AlbumController');
let ArticlesController = require('./../controllers/ArticlesController')


// Routes
module.exports = function(app){

// Main Routes
    app.get('/', HomeController.Index);
    app.get('/accueil', HomeController.Index);

// VIP
    app.get('/repertoire', VipController.Repertoire);

// albums
   app.get('/album', AlbumController.ListerAlbum);
  
// Articles
   app.get('/articles', ArticlesController.ListerArticles);

 // tout le reste
    app.get('*', HomeController.NotFound);
    app.post('*', HomeController.NotFound);
};