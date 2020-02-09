
exports.up = function(knex) {
    return knex.schema.createTable('matches',(table)=>{
        table.increments('id');
        table.text("away");
        table.text("awayThmb");
        table.date("date");
        table.enu("final",['Yes','No']);
        table.text("local");
        table.text("localThmb");
        table.text("referee");
        table.enu("result",["W","D","L","n/a"]);
        table.integer("resultAway");
        table.integer("resultLocal");
        table.text("stadium");
    })
  
}
exports.down = function(knex) {
    return knex.schema.dropTable('matches');
  
};
