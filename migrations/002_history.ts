export const up = (knex: any, promise: Promise<any>) => {
  return knex.schema.createTable('history', (table: any) => {
    table.increments('id')
    table.string('event')
  });
};

export const down = (knex: any, promise: Promise<any>) => {
  return knex.schema.dropTable('history');
};
