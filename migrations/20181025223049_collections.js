exports.up = function(knex, Promise) {
  return knex.schema.createTable('collections', tbl => {
    tbl.increments();

    tbl.string('name', 128);
    tbl.string('desc', 1024);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('collections');
};
