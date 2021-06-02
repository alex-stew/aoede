const express = require('express');
const path = require('path');
const routes = require('./routes');
const session = require('express-session');
const cors = require('cors');
const decodeIDTokenMiddle = require('./utils/token');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};
app.use(session(sess));
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(decodeIDTokenMiddle);

app.use(routes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening 🌏 on PORT: ' + PORT));
});
