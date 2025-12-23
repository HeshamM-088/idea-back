/**
 * Function: improvePrompt
 * ------------------------
 * Accepts a rough idea and returns an "improved" version.
 * Minimal logic for demonstration purposes.
 * Can be replaced later with AI/NLP integration.
 */

const improvePrompt = (text) => {
  if (!text || text.trim() === "") return "";

  let improved = text.trim();

  improved = improved.charAt(0).toUpperCase() + improved.slice(1);

  if (!improved.endsWith(".")) improved += ".";

  improved += " Make it clear and structured for a website.";

  return improved;
};

module.exports = improvePrompt;
