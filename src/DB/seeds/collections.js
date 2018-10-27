exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('collections')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('collections').insert([
        {
          name: 'SUPERSICKCOLLECTION',
          desc:
            'SUPERSICKCOLLECTIONSUPERSICKCOLLECTIONSUPERSICKCOLLECTIONSUPERSICKCOLLECTION',
        },
        {
          name: 'SUPERSICKCOLLECTION2',
          desc:
            'SUPERSICKCOLLECTIONSUPERSICKCOLLECTIONSUPERSICKCOLLECTIONSUPERSICKCOLLECTION',
        },
        {
          name: 'SUPERSICKCOLLECTION3',
          desc:
            'SUPERSICKCOLLECTIONSUPERSICKCOLLECTIONSUPERSICKCOLLECTIONSUPERSICKCOLLECTION',
        },
      ]);
    });
};
