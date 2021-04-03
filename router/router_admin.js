let HomeController = require('./../controllers/HomeController');
let AdminController = require('../controllers/AdminController');
// Routes
module.exports = function(app){

// Main Routes
    app.get('/', AdminController.Connexion);

    app.get('/vips',AdminController.Vips);
    
    app.get('/photos',AdminController.Photos);
    
 // tout le reste
    app.get('*', HomeController.NotFound);
    app.post('*', HomeController.NotFound);

};
