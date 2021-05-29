const User = require("./User");
const Band = require("./Band");
const Song = require("./Song");
const Chord = require("./Chord");
const Lyric = require("./Lyrics");

Band.hasMany(User, {
  foreignKey: "band_id",
  onDelete: "CASCADE",
});

Band.hasMany(Song, {
  foreignKey: "band_id",
  onDelete: "CASCADE",
});

Song.hasMany(Lyric, {
  foreignKey: "song_id",
  onDelete: "CASCADE",
});

Lyric.hasOne(Chord, {
  foreignKey: "lyric_id",
  onDelete: "CASCADE",
});

User.belongsTo(Band, {
  foreignKey: "band_id",
  onDelete: "CASCADE",
});

Song.belongsTo(Band, {
  foreignKey: "band_id",
  onDelete: "CASCADE",
});

Lyric.belongsTo(Chord, {
  foreignKey: "song_id",
  onDelete: "CASCADE",
});

Lyric.belongsTo(Chord, {
  foreignKey: "chord_id",
  onDelete: "CASCADE",
});

module.exports = { User, Band, Song, Chord, Lyric };
