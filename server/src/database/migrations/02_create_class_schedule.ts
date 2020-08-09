import Knex from 'knex';

// Adicionar informações no banco (up):
export async function up(knex: Knex) {
  return knex.schema.createTable('class_schedule', table => {
    table.increments('id').primary(); // Chave primária.
    
    table.integer('week_day').notNullable();
    table.integer('from').notNullable();
    table.integer('to').notNullable();

    table.integer('class_id')  // Chave estrangeira.
      .notNullable()
      .references('id')
      .inTable('classes')       // Tabela de referência.
      .onUpdate('CASCADE')    // Caso o usuário seja atualizado, atualiza as demais informações.
      .onDelete('CASCADE');   // Caso o usuário seja deletado, deleta as outras demais informações.
  });
}

// Caso ocorra erros, irá desfazer os processos feitos (down):
export async function down(knex: Knex) {
  return knex.schema.dropTable('class_schedule');
}