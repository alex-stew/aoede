const router = require('express').Router();
const path = require('path');
require('dotenv').config();

const apiRoutes = require('./api');

if (process.env.NODE_ENV === "production") {
    app.get("/*", (req, res) => {
        res.sendFile(path.join(__dirname, "../client/build/index.html"));
    });
}
// router.use('/api', apiRoutes);

module.exports = router;
