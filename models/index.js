const User = require("./User");
const Band = require("./Band");
const Song = require("./Song");
const Bar = require("./Bar");
const BarChord = require("./BarChord");
const Chord = require("./Chord");

// Band to User relationship
Band.hasMany(User, {
  foreignKey: "band_id",
  onDelete: "CASCADE",
});

User.belongsTo(Band, {
  foreignKey: "band_id",
  onDelete: "CASCADE",
});

// Band to Song relationship
Band.hasMany(Song, {
  foreignKey: "band_id",
  onDelete: "CASCADE",
});

Song.belongsTo(Band, {
  foreignKey: "band_id",
  onDelete: "CASCADE",
});

// Song to Bar relationship
Song.hasMany(Bar, {
  foreignKey: "song_id",
  onDelete: "CASCADE",
});

Bar.belongsTo(Song, {
  foreignKey: "song_id",
  onDelete: "CASCADE",
});

// Bar to BarChord relationship
Bar.hasMany(BarChord, {
  foreignKey: "bar_id",
  onDelete: "CASCADE",
});

BarChord.belongsTo(Bar, {
  foreignKey: "bar_id",
  onDelete: "CASCADE",
});

// BarChord to Chord relationship
Chord.hasMany(BarChord, {
  foreignKey: "chord_id",
  onDelete: "CASCADE",
});

BarChord.belongsTo(Chord, {
  foreignKey: "chord_id",
  onDelete: "CASCADE",
});

module.exports = { User, Band, Song, Bar, BarChord, Chord };
