
exports.up = function(knex) {
    return knex.schema.createTable("teams",(table)=>{
        table.increments("id");
        table.text("name");
        table.text("shortname");
        table.text("thumb");
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable("teams");
  
};
