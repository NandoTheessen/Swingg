exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('products')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('products').insert([
        {
          name: 'rowValue1',
          desc: 'blablabalbalbab',
          collection: 10,
        },
        {
          name: 'rowValue2',
          desc: 'blablabalbalbab',
          collection: 11,
        },
        {
          name: 'rowValue3',
          desc: 'blablabalbalbab',
          collection: 12,
        },
      ]);
    });
};
