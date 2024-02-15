const { https } = require('firebase-functions');
const next  = require('next');

const isDev = process.env.NODE_ENV !== 'production';

const server = next({
    dev: isDev,
    //location of .next generated after running -> yarn build
    conf: { distDir: '.next' },
});

const nextjsHandle = server.getRequestHandler();
exports.nextServer = https.onRequest((req, res) => {
    return server.prepare()
        .then(() => {
            return nextjsHandle(req, res)
        });
});

/*
firebase-admin,firebase-functions
require these plugins,install them
*/