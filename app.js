const express = require('express');

const { setStatics } = require('./utils/statics');

const app = express()

// View engine
app.set("view engine", "ejs")
app.set("views", "views")

// Statics
setStatics(app)

// Routes
app.use("/", (req, res) => {
    res.send(`
        <h1> Hello World! </h1>
    `)
})

app.listen(3000, () => console.log("Server is running"))