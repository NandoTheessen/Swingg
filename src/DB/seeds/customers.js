exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('customers')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('customers').insert([
        {
          'first-name': 'Peter',
          'last-name': 'Klaus',
          email: 'aosjdifofiasdf',
          password: 'aodsfjadsf',
        },
        {
          'first-name': 'Peter',
          'last-name': 'Klaus',
          email: 'aosjdiffoiasdf',
          password: 'aodsfjadsf',
        },
        {
          'first-name': 'Peter',
          'last-name': 'Klaus',
          email: 'aosjdifoiassdf',
          password: 'aodsfjadsf',
        },
      ]);
    });
};
