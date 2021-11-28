const path = require('path');

const express = require('express');

const { root } = require('./path');

const setStatics = (app) => {
    app.use(express.static(path.join(root, "pablic")))
    app.use(express.static(path.join(root, "node_modules", "font-awesome")))
}

exports.setStatics = setStatics;