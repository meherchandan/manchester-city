
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('matches').del()
    .then(function () {
      // Inserts seed entries
      return knex('matches').insert([
        {
          away: 'Man.City',
          awayThmb:"manchester_city",
          date:"2018-05-22",
          final : "No",
          local : "Burnley",
          localThmb : "burnley",
          referee : "Marcus Red",
          result : "n/a",
          resultAway : null,
          resultLocal : null,
          stadium : "Senheiser Arena"
        },

        {
          away: 'Man.City',
          awayThmb: 'manchester_city',
          date: '2019-05-28',
          final: 'Yes',
          local: 'Tottenham',
          localThmb: 'tottenham',
          referee: 'Marcus Red',
          result: 'D',
          resultAway: 2,
          resultLocal: 2,
          stadium: 'Star Wars Stadium'
        },
        {
          away: 'Man.City',
          awayThmb: 'manchester_city',
          date: '2019-03-11',
          final: 'Yes',
          local: 'Newcastle',
          localThmb: 'newcastle',
          referee: 'Robert Johnson',
          result: 'W',
          resultAway: 4,
          resultLocal: 2,
          stadium: 'Wolfer Stdium'
        },
        {
          away: 'Man.City',
          awayThmb: 'manchester_city',
          date: '2019-05-01',
          final: 'Yes',
          local: 'Chelsea',
          localThmb: 'chelsea',
          referee: 'Mathias Rorry',
          result: 'W',
          resultAway: 2,
          resultLocal: 0,
          stadium: 'Toys centre'
        },
        {
          away: 'Man.City',
          awayThmb: 'manchester_city',
          date: '2018-11-30',
          final: 'Yes',
          local: 'Cardiff',
          localThmb: 'cardiff',
          referee: 'Borner Marlon',
          result: 'W',
          resultAway: 2,
          resultLocal: 0,
          stadium: 'The shark tank arena'
        },
        {
          away: 'Man.Utd',
          awayThmb: 'manchesr_united',
          date: '2019-01-25',
          final: 'Yes',
          local: 'Man.City',
          localThmb: 'manchester_city',
          referee: 'Marcus Red',
          result: 'L',
          resultAway: 3,
          resultLocal: 2,
          stadium: 'La grande rica'
        },
        {
          away: 'Man.City',
          awayThmb: 'manchester_city',
          date: '2018-06-08',
          final: 'Yes',
          local: 'Brighton',
          localThmb: 'brighton',
          referee: 'Harry Potter',
          result: 'D',
          resultAway: 0,
          resultLocal: 0,
          stadium: 'Slitherin Centre'
        },
        {
          away: 'Man.City',
          awayThmb: 'manchester_city',
          date: '2018-06-15',
          final: 'Yes',
          local: 'Bournemouth',
          localThmb: 'bournemouth',
          referee: 'Hector Pitana',
          result: 'L',
          resultAway: 3,
          resultLocal: 4,
          stadium: 'Senheiser Arena'
        },
        {
          away: 'Man.City',
          awayThmb: 'manchester_city',
          date: '2018-06-07',
          final: 'Yes',
          local: 'Arsenal',
          localThmb: 'arsenal',
          referee: 'Robert Johnson',
          result: 'D',
          resultAway: 5,
          resultLocal: 5,
          stadium: 'Star Wars Stadium'
        },
        {
          away: 'C.Palace',
          awayThmb: 'crystal_palace',
          date: '2018-06-02',
          final: 'Yes',
          local: 'Man.City',
          localThmb: 'manchester_city',
          referee: 'Marcus Smart',
          result: 'W',
          resultAway: 0,
          resultLocal: 1,
          stadium: 'The solar'
        },
        {
          away: 'Man.City',
          awayThmb: 'manchester_city',
          date: '2018-06-02',
          final: 'Yes',
          local: 'Liverpool',
          localThmb: 'liverpool',
          referee: 'Hector Pitana',
          result: 'W',
          resultAway: 3,
          resultLocal: 1,
          stadium: 'Wolfer Stdium'
        },
        {
          away: 'Hudd.Town',
          awayThmb: 'huddersfield',
          date: '2018-12-13',
          final: 'No',
          local: 'Man.City',
          localThmb: 'manchester_city',
          referee: 'Mathias Rorry',
          result: 'n/a',
          resultAway: null,
          resultLocal: null,
          stadium: 'The shark tank arena'
        }
      ]);
    });
};
