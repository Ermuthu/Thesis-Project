const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  created: { type: Date, default: Date.now },
  googleId: String,
  spotifyId: String,
  user: String,
  access_token: String,
  refresh_token: String,
  name: String,
  alltracks: [],
  image: [],
  playlists: [],
  ownPlaylist: []
});

mongoose.model("users", userSchema);
