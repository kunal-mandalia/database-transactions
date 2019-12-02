export const up = (knex: any, promise: Promise<any>) => {
  return knex.schema.createTable('account', (table) => {
    table.increments('id')
    table.string('status')
  });
};

export const down = (knex: any, promise: Promise<any>) => {
  return knex.schema.dropTable('account');
};
