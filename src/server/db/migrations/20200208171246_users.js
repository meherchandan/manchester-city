
exports.up = function(knex) {
    return knex.schema.createTable('users',(table)=>{
        table.increments('id');
        table.text('useremail');
        table.text('password');
        table.boolean('active');
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
  
};
