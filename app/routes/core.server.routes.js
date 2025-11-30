const core = require("../controllers/core.server.controllers");
const { authenticate, optionalAuth } = require("../lib/authentication");

module.exports = function(app) {

  // POST /item  - Create a new auction item
  // Access: Requires authentication
  app.route("/item")
    .post(authenticate, core.create_item);

  // GET /item/:item_id  - Get full details of a specific item
  // Access: Public
  app.route("/item/:item_id")
    .get(core.get_item);

  // POST /item/:item_id/bid  - Place a bid on a specific item
  // Access: Requires authentication
  // GET /item/:item_id/bid  - Get bid history for a specific item
  // Access: Public
  app.route("/item/:item_id/bid")
    .post(authenticate, core.place_bid)
    .get(core.get_bids);

  // GET /search  - Search for items by keyword, status, and pagination
  // Access: Optional authentication — required only for status filters
  app.route("/search")
    .get(optionalAuth, core.search_items);

  // GET /categories - Get all available categories
  // POST /categories - Make a new category
  // Access: Public
  app.route("/categories")
    .get(core.get_categories)
    .post(core.create_category);

};