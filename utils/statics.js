const path = require('path');

const express = require('express');

const { root } = require('./path');

exports.setStatics = (app) => {
    app.use(express.static(path.join(root, "public")))
    app.use(express.static(path.join(root, "node_modules", "font-awesome")))
}