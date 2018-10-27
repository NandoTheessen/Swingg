exports.up = function(knex, Promise) {
  return knex.schema.createTable('order_products', tbl => {
    tbl.increments();

    tbl
      .integer('order')
      .unsigned()
      .references('orders.id');

    tbl
      .integer('product')
      .unsigned()
      .references('products.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('order_products');
};
