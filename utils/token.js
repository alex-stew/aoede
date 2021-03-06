const admin = require("../config/firebase-config");

async function decodeIDToken(req, res, next) {
  if (req.headers?.authorization?.startsWith("Bearer ")) {
    const idToken = req.headers.authorization.split("Bearer ")[1];

    try {
      const decodedToken = await admin.auth().verifyIdToken(idToken);
      req["currentUser"] = decodedToken;
      if (decodedToken) {
        return next();
      }
      return res.json({
        message: "unauthorized attempt to access information",
      });
    } catch (err) {
      console.log(err);
    }
  }
  next();
}

module.exports = decodeIDToken;
