const filter = require("leo-profanity");

const containsProfanity = (text) => {
  return filter.check(text);
};

const cleanText = (text) => {
  return filter.clean(text); // Replaces offensive words with asterisks
};

module.exports = {
  containsProfanity,
  cleanText
};