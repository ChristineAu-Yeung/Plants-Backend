const plants = require('./plants.routes');

module.exports = (app) => {
    app.use('/plants', plants);
}