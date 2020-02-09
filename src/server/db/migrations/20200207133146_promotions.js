
exports.up = function(knex) {
  return knex.schema.createTable('promotions',(table)=>{
      table.increments("id");
      table.text("email");

  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('promotions');
};
