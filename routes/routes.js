const plants = require('./plants.routes');
const users = require('./users.routes');

module.exports = (app) => {
    app.use('/plants', plants);
    app.use('/users', users)
}