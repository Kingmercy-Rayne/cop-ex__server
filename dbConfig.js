// middleman between helpers and knexfile

const dbEngine = process.env.DB_ENVIRONMENT || "development";

// racket/ratchet notation?
const config = require("./knexfile")[dbEngine];

module.exports = require("knex")(config);
