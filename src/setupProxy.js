const proxy = require('http-proxy-middleware');
module.exports = (app) => {
    app.use(proxy('/forecast', {
        target: 'https://api.darksky.net',
        changeOrigin: true
    }));
    app.use(proxy('/maps', {
        target: 'https://maps.googleapis.com',
        changeOrigin: true
    }));
};