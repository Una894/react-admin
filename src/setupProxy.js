const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(proxy('/api',
        {

            "target": "http://172.16.42.241:8080",
            "pathRewrite": {
                "^/api" : ""
            },
            "changeOrigin": true

        }
    ));
};
