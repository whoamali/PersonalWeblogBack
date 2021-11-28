const express = require('express');

const { setStatics } = require('./utils/statics');
const indexRoute = require('./routes/indexRoute');

const app = express()

// View engine
app.set("view engine", "ejs")
app.set("views", "views")

// Statics
setStatics(app)

// Routes
app.use(indexRoute)

app.listen(3000, () => console.log("Server is running"))