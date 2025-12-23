const Idea = require("../model/idea.model");
const asyncWrapper = require("../utils/asyncWrapper");
const improvePrompt = require("../utils/improvePrompt");

const createIdea = asyncWrapper(async (req, res) => {
  const { text } = req.body;

  if (!text || text.trim() === "") {
    return res
      .status(400)
      .json({ success: false, message: "Idea text is required" });
  }

  const improvedText = improvePrompt(text);

  const idea = await Idea.create({
    originalText: text,
    improvedText,
  });

  res.status(201).json({
    success: true,
    id: idea._id,
    originalText: idea.originalText,
    improvedText: idea.improvedText,
  });
});

const refineIdea = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const { refinement } = req.body;

  if (!refinement || refinement.trim() === "") {
    return res
      .status(400)
      .json({ success: false, message: "Refinement text is required" });
  }

  const idea = await Idea.findById(id);
  if (!idea) {
    return res.status(404).json({ success: false, message: "Idea not found" });
  }

  idea.refinements.push(refinement);

  const allText = [idea.originalText, ...idea.refinements].join(" ");
  idea.improvedText = improvePrompt(allText);

  await idea.save();

  res.status(200).json({
    success: true,
    id: idea._id,
    originalText: idea.originalText,
    refinements: idea.refinements,
    improvedText: idea.improvedText,
  });
});

module.exports = {
  createIdea,
  refineIdea,
};
