const config = {
    api: {
        port: process.env.PORT ? process.env.PORT : 5000,
        env: process.env.env ? process.env.env : 'development',
        jwtSecret: process.env.jwtSecret ? process.env.jwtSecret :  'youtube.com/watch?v=dQw4w9WgXcQ',
        database: process.env.database ? process.env.database : 'mongodb://localhost/plants',
    }
}

module.exports = config;