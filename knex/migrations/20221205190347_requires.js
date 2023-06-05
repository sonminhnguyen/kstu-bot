/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
    await knex.schema.createTable('requires', function(table) {
        table.increments('id');
        table.string('event');
        table.string('title');
        table.string('note');
        table.string('group');
        table.boolean('solved');
        //students table
        table.string('name');
        table.string('year');
        table.string('telephone');
        table.integer('id_vk');
        table.string('linkVK');
        table.string('email');
        table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async (knex) => {
    await knex.schema.dropTable('requires');

};
