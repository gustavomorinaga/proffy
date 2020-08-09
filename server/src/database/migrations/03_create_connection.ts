import Knex from 'knex';

// Adicionar informações no banco (up):
export async function up(knex: Knex) {
  return knex.schema.createTable('connections', table => {
    table.increments('id').primary(); // Chave primária.

    table.integer('user_id')  // Chave estrangeira.
      .notNullable()
      .references('id')
      .inTable('users')       // Tabela de referência.
      .onUpdate('CASCADE')    // Caso o usuário seja atualizado, atualiza as demais informações.
      .onDelete('CASCADE');   // Caso o usuário seja deletado, deleta as outras demais informações.

    table.timestamp('created_at')   // Pega o horário que foi feita a conexão.
      .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
      .notNullable();
  });
}

// Caso ocorra erros, irá desfazer os processos feitos (down):
export async function down(knex: Knex) {
  return knex.schema.dropTable('connections');
}