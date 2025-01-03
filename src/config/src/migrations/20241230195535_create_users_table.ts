import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
    return knex.schema.hasTable('users').then((exists) => {
      if (!exists) {
        return knex.schema.createTable('users', (table) => {
          table.increments('id').primary();
          table.string('name').notNullable();
          table.string('email').unique().notNullable();
          table.string('password').notNullable();
          table.timestamps(true, true);
        });
      }
    });
  }
  
  export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('users');
  }
  
