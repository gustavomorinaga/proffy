import Knex from 'knex';

// Adicionar informações no banco (up):
export async function up(knex: Knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary(); // Chave primária.
    table.string('name').notNullable();
    table.string('avatar').notNullable();
    table.string('whatsapp').notNullable();
    table.string('bio').notNullable();
  });
}

// Caso ocorra erros, irá desfazer os processos feitos (down):
export async function down(knex: Knex) {
  return knex.schema.dropTable('users');
}