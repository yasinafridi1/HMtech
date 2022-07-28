const homeController = require("../app/https/controllers/homeController");
const serviceController = require("../app/https/controllers/serviceController");
const aboutController = require("../app/https/controllers/aboutController");

function initRoutes(app) {
    app.get('/',homeController().index);
    app.get('/about',aboutController().index);
    app.get('/acservice',serviceController().aircondition);
    app.get('/handiman',serviceController().handyman);
    app.get('/carpenter',serviceController().carpenter);
    app.get('/ceiling',serviceController().ceiling);
    app.get('/cctv',serviceController().cctv);
    app.get('/glass',serviceController().glass);
    app.get('/pestservice',serviceController().pestservice);
    app.get('/plumbing',serviceController().plumbing);
    app.get('/tiles',serviceController().tiles);
    app.get('/swimmingpool',serviceController().swimmingpool);
    app.get('/watertank',serviceController().watertank);
    app.get('/electrical',serviceController().electrical);
    app.get('/maintanance',serviceController().maintanance);
    app.get('/paintaing',serviceController().paintaing);
    app.get('/specialcleaning',serviceController().specialcleaning);
}

module.exports = initRoutes;


