exports.up = function(knex, Promise) {
  return knex.schema.createTable('orders', tbl => {
    tbl.increments();

    tbl
      .integer('customer')
      .unsigned()
      .references(customer.id);

    tbl.timestamps('Date');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('orders');
};
