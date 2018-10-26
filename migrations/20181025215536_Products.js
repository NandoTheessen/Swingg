exports.up = function(knex, Promise) {
  return knex.schema.createTable('products', tbl => {
    tbl.increments();

    tbl.string('name', 128).notNullable();
    tbl.string('desc', 1024).notNullable();

    tbl
      .integer('collection')
      .unsigned()
      .references('collection.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('products');
};
