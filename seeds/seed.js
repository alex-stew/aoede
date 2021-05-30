const sequelize = require('../config/connection');
const { User, Band, Song, Bar, BarChord, Chord } = require('../models');

const userData = require('./userData.json');
const bandData = require('./bandData.json');
const songData = require('./songData.json');
const barData = require('./barData.json');
const barChordData = require('./barChordData.json');
const chordData = require('./chordData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const bands = await Band.bulkCreate(bandData,  {
    individualHooks: true,
    returning: true,
  });

  const users = await User.bulkCreate(userData,  {
    individualHooks: true,
    returning: true,
  });

  const songs = await Song.bulkCreate(songData,  {
    individualHooks: true,
    returning: true,
  });

  const bars = await Bar.bulkCreate(barData,  {
    individualHooks: true,
    returning: true,
  });

  const chords = await Chord.bulkCreate(chordData,  {
    individualHooks: true,
    returning: true,
  });

  const barChords = await BarChord.bulkCreate(barChordData,  {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
