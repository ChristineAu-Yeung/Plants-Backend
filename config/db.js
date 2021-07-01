const mongoose = require('mongoose');

exports.connect = (dbString) => {
    mongoose.connect(dbString, {
        useUnifiedTopology: true,
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false
    })
}
