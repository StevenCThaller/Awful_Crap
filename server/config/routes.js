const controller = require('../controllers/controller.js');

module.exports = (app) => {
    app.get('/', controller.home)
    app.get('/show/all', controller.showall)
    app.get('/show/:id', controller.displayone)
    app.post('/new/', controller.createnew)
    app.put('/update/:id', controller.updatetask)
    app.delete('/remove/:id', controller.delete)
}