const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  created: { type: Date, default: Date.now },
  days: { type: Number, default: 0 },
  profile: Object,
  displayName: String,
  googleId: String,
  spotifyId: String,
  token_type: String,
  expires_in: Number,
  refreshToken: String,
  display_name: String,
  accessToken: String,
  name: String,
  email: String
});

mongoose.model("users", userSchema);
