
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('players').del()
    .then(function () {
      // Inserts seed entries
      return knex('players').insert([
          {
            image: '8db4a774-40f4-462c-873e-197699360ffc.png',
            lastname: 'Morales',
            name: 'Ederson',
            number: 31,
            position: 'Keeper'
          },
          {
            image: 'c0aa5747-1109-41ac-a5be-d1e61186d66c.png',
            lastname: 'Bravo',
            name: 'Claudio',
            number: 1,
            position: 'Keeper'
          },
          {
            image: '1bc2e700-8285-4b3d-8377-63b20f7d11c1.png',
            lastname: 'Mendy',
            name: 'Benjamin',
            number: 22,
            position: 'Defence'
          },
          {
            image: '5d9a4e92-15ce-4092-9b0a-356b38b2ba42.png',
            lastname: 'Barbosa',
            name: 'Danilo',
            number: 3,
            position: 'Defence'
          },
          {
            image: 'ca1dd529-4dbb-4364-a173-e5fea036c218.png',
            lastname: 'Laporte',
            name: 'Aymeric',
            number: 14,
            position: 'Defence'
          },
          {
            image: '713939f6-b5ca-4dce-b479-8e62a38ccc1f.png',
            lastname: 'Otamendy',
            name: 'Nicolas',
            number: 30,
            position: 'Defence'
          },
          {
            image: 'ccfeb5d8-c44f-4c8f-ac1e-6daa0eb15528.png',
            lastname: 'Stones',
            name: 'John',
            number: 5,
            position: 'Defence'
          },
          {
            image: '63d5f351-c843-4488-8476-c156f9458c76.png',
            lastname: 'Adarabioyo',
            name: 'Tosin',
            number: 53,
            position: 'Defence'
          },
          {
            image: 'eb3435cc-d9b1-46b8-8140-43146c024813.png',
            lastname: 'Kompany',
            name: 'Vincent',
            number: 4,
            position: 'Defence'
          },
          {
            image: 'f0bb773f-42c8-4995-84b5-232ab667e7a4.png',
            lastname: 'Silva',
            name: 'Bernardo',
            number: 20,
            position: 'Midfield'
          },
          {
            image: 'c7ddebef-314c-43be-9cd8-2d985612cc81.png',
            lastname: 'Delph',
            name: 'Fabian',
            number: 18,
            position: 'Midfield'
          },
          {
            image: '14664663-7132-40ae-8613-8eb439603c9e.png',
            lastname: 'Diaz',
            name: 'Brahim',
            number: 55,
            position: 'Midfield'
          },
          {
            image: 'be445c6f-bf08-4ce0-b690-748b7a1337fd.png',
            lastname: 'Luiz Roza',
            name: 'Fernandinho',
            number: 25,
            position: 'Midfield'
          },
          {
            image: 'e3222c4f-c9e2-44fd-b977-a4fbc0227108.png',
            lastname: 'Gundogan',
            name: 'Ilkay',
            number: 8,
            position: 'Midfield'
          },
          {
            image: '88d17eb0-a259-4f7c-9cf7-b59a40a7631b.png',
            lastname: 'De Bruyne',
            name: 'Kevin',
            number: 17,
            position: 'Midfield'
          },
          {
            image: '485a028f-658f-442d-b8f0-f4df9081dc88.png',
            lastname: 'Sterling',
            name: 'Raheem',
            number: 7,
            position: 'Midfield'
          },
          {
            image: 'd14ebf40-3137-4408-a3a7-f16433678a21.png',
            lastname: 'Sane',
            name: 'Leroy',
            number: 19,
            position: 'Midfield'
          },
          {
            image: 'b6ee8cac-dfa2-4114-96b6-eb11540a0a57.png',
            lastname: 'Jesus',
            name: 'Gabriel',
            number: 33,
            position: 'Striker'
          },
          {
            image: '7462df35-8e59-4c1d-bea3-148e98086fe5.png',
            lastname: 'Nmecha',
            name: 'Lukas',
            number: 12,
            position: 'Striker'
          },
          {
            image: 'ed6a4a80-e36c-4641-9280-b3404e57a5a2.png',
            lastname: 'Aguero',
            name: 'Sergio',
            number: 10,
            position: 'Striker'
          }      
      ]);    
    });
};
