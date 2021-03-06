const router = require('express').Router();
const path = require('path');
require('dotenv').config();

const apiRoutes = require('./api');
router.use('/api', apiRoutes);

if (process.env.NODE_ENV === "production") {
    router.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../client/build/index.html"));
    });
}


module.exports = router;
