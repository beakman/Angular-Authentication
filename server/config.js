const config = {
    dev: {
        app: {
            port: 3000,
            secret_key : 'secretKey'
        },

        db: {
            host: 'imransilvake:Welcome1@ds129540.mlab.com',
            port: 29540,
            name: 'angular-auth'
        }
    },

    prod: { }
};

module.exports = config;
