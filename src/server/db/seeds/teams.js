
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('teams').del()
    .then(function () {
      // Inserts seed entries
      return knex('teams').insert([
          {
            name: 'Arsenal',
            shortName: 'Arsenal',
            thumb: 'arsenal'
          },
          {
            name: 'AFC Bournemouth',
            shortName: 'Bournemouth',
            thumb: 'bournemouth'
          },
          {
            name: 'Brighton and Hove Albion',
            shortName: 'Brighton',
            thumb: 'brighton'
          },
          {
            name: 'Burnley',
            shortName: 'Burnley',
            thumb: 'burnley'
          },
          {
            name: 'Chelsea',
            shortName: 'Chelsea',
            thumb: 'chelsea'
          },
          {
            name: 'Crystal Palace',
            shortName: 'C.Palace',
            thumb: 'crystal_palace'
          },
          {
            name: 'Everton',
            shortName: 'Everton',
            thumb: 'everton'
          },
          {
            name: 'Fulham',
            shortName: 'Fulham',
            thumb: 'fulham'
          },
          {
            name: 'Huddersfield Town',
            shortName: 'Hudd.Town',
            thumb: 'huddersfield'
          },
          {
            name: 'Cardiff City',
            shortName: 'Cardiff',
            thumb: 'cardiff'
          },
          {
            name: 'Leicester City',
            shortName: 'Leicester',
            thumb: 'leicester'
          },
          {
            name: 'Liverpool',
            shortName: 'Liverpool',
            thumb: 'liverpool'
          },
          {
            name: 'Newcastle United',
            shortName: 'Newcastle',
            thumb: 'newcastle'
          },
          {
            name: 'Tottenham Hotspur',
            shortName: 'Tottenham',
            thumb: 'tottenham'
          },
          {
            name: 'Watford',
            shortName: 'Watford',
            thumb: 'watford'
          },
          {
            name: 'Westham United',
            shortName: 'Westham',
            thumb: 'west_ham'
          },
          {
            name: 'Wolverhampton Wanderers',
            shortName: 'Wolverhampton',
            thumb: 'wolverhampton'
          },
          {
            name: 'Southampton',
            shortName: 'Southampton',
            thumb: 'southampton'
          },
          {
            name: 'Manchester City',
            shortName: 'Man.City',
            thumb: 'manchester_city'
          },
          {
            name: 'Manchester United',
            shortName: 'Man.Utd',
            thumb: 'manchesr_united'
          }
      ]);
    });
};
