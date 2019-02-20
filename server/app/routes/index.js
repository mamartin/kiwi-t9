const suggestionRoutes = require("./suggestion_routes");

module.exports = function(app) {
  suggestionRoutes(app);
  // Other route groups could go here, in the future
};
