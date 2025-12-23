const mongoose = require("mongoose");

const ideaSchema = new mongoose.Schema(
  {
    originalText: {
      type: String,
      required: [true, "Original idea text is required"],
      trim: true,
    },
    refinements: {
      type: [String],
      default: [],
    },
    improvedText: {
      type: String,
      default: "",
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Idea = mongoose.model("Idea", ideaSchema);

module.exports = Idea;
