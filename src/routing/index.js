const { ttl } = require('../template')
const { readFileSync, writeFileSync } = require('fs');


function newRouter(routes) {
    Object.values(routes)
        .filter(s => typeof s === 'function')
        .forEach(s => s())
}


function newRoute(app, url) {
    if (url == '/') {
        app.get(url, function (req, res) {
            res.send(ttl(readFileSync(process.cwd() + '/views/index.html', 'utf8'), require(process.cwd() + '/views/index.js'), require(process.cwd() + '/views/index.xcss')))
        });
    } else {
        app.get(url, function (req, res) {
            res.send(ttl(readFileSync(process.cwd() + '/views/' + url + '/index.html', 'utf8'), require(process.cwd() + '/views/' + url + '/index.js'), require(process.cwd() + '/views/' + url + '/index.xcss')))
        });
    }
}

module.exports = {
    newRouter,
    newRoute
}