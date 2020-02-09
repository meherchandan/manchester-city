
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('promotions').del()
    .then(function () {
      // Inserts seed entries
      return knex('promotions').insert([
          {
            email: 'francis@gmail.com'
          },
          {
            email: 'francis@gmail.coms'
          },
          {
            email: 'ffff@gmail.com'
          },
          {
            email: 'fvdf@gmail.com'
          },
          {
            email: 'fernando.martin.lobo@gmail.com'
          },
          {
            email: 'sdsddf@gmail.com'
          },
          {
            email: 'sdfsdf@gmail.com'
          },
          {
            email: 'gagga@ha.com'
          },
          {
            email: 'sss@gmail.com'
          }
      ]);
    });
};
