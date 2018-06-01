import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  score: Number,
  memberSince: Date,
  favorites: [mongoose.Schema.Types.ObjectId],
  lastLogin: Date,
  ips: [String],
  tagHistory: {
    type: Map,
    of: Number
  }
});
