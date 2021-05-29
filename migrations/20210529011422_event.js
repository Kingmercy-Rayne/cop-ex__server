exports.up = function (knex) {
  return knex.schema
    .createTable("event", (table) => {
      table.increments("id").primary();
      table.string("title").notNullable();
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.integer("is_college_event").defaultTo(0);
      table.integer("is_completed").defaultTo(0);
      table.text("officer_in_charge").notNullable();
      table.integer("is_successful").defaultTo(0);
      table.integer("is_sustained").defaultTo(0);
      table.string("image_url").notNullable();
      table.integer("has_concept_paper").defaultTo(0);
      table.text("officers_present");
      table.integer("is_registration_closed").defaultTo(0);
      table.date("date").notNullable();
      table.string("time").notNullable();
      table.string("location").notNullable();
      table.string("registration_link").notNullable();
      table.string("department").notNullable();
      table
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("user")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("registration", (table) => {
      table.increments();
      table.string("name").notNullable();
      table.string("email").notNullable();
      table
        .integer("event_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("event")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("user", (table) => {
      table.increments("id").primary();
      table.string("role").notNullable();
      table.string("name").notNullable();
      table.string("email").notNullable();
      table.string("password").notNullable();
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("event")
    .dropTableIfExists("registration")
    .dropTableIfExists("user");
};
