const mongoose = require("mongoose");

const Post = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 30,
    },
    location: {
      type: String,
      required: true,
      maxlength: 30,
    },
    likes: {
      type: Number,
      default: 30
    },
    description: {
      type: String,
      required: true,
      maxlength: 50,
    },
    url: {
      type: String,
      required: true,
    },
    cloudinary_id: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now(0)
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", Post);