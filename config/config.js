const config = {
    api: {
        port: process.env.PORT ?? 5000,
        env: process.env.env ?? 'development',
        jwt_secret: process.env.jwt_secret ?? 'youtube.com/watch?v=dQw4w9WgXcQ',
        database: process.env.database ?? 'mongodb://localhost/plants',
    }
}

module.exports = config;