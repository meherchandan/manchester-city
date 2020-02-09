
exports.up = function(knex) {
  return knex.schema.createTable('players',(table)=>{
      table.increments("id");
      table.text("image");
      table.text("name");
      table.text("lastname");
      table.integer("number");
      table.text('position');

  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('players')
  
};
