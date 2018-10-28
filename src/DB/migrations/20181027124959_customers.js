exports.up = function(knex, Promise) {
  return knex.schema.createTable('customers', tbl => {
    tbl.increments();

    tbl.string('firstName', 128).notNullable();
    tbl.string('lastName', 128).notNullable();
    tbl.string('company', 256);

    tbl
      .string('email', 256)
      .notNullable()
      .unique();

    tbl.string('password', 128).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('customers');
};
