const { newRoute, newRouter } = require('./routing')
const { ttl, styleToString, rawTtl } = require('./template')
const { readFileSync } = require('fs')

const express = require('express')
function createDarkApp() {
    return express()
}

function _componentImport(componentPath) {
    let component
    if (componentPath == '/') {
        component = rawTtl(readFileSync(process.cwd() + '/views/index.html', 'utf8'), require(process.cwd() + '/views/index.js'), require(process.cwd() + '/views/index.xcss'))
    } else {
        component = rawTtl(readFileSync(process.cwd() + '/views/' + componentPath + '/index.html', 'utf8'), require(process.cwd() + '/views/' + componentPath + '/index.js'), require(process.cwd() + '/views/' + componentPath + '/index.xcss'))
    }
    return component
}

module.exports = {
    newRoute,
    newRouter,
    ttl,
    styleToString,
    createDarkApp,
    _componentImport
}