const admin = require("firebase-admin");
require('dotenv').config();
const serviceAccount = 
process.env.FIREBASE_TYPE
process.env.FIREBASE_PROJECT_ID
process.env.FIREBASE_PRIVATE_KEY_ID
process.env.FIREBASE_PRIVATE_KEY
process.env.FIREBASE_CLIENT_EMAIL
process.env.FIREBASE_CLIENT_ID
process.env.FIREBASE_AUTH_URI
process.env.FIREBASE_TOKEN_URI
process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL
process.env.FIREBASE_CLIEN_X509_CERT_URL


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;
