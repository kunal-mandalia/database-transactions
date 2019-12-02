export const up = (knex: any, promise: Promise<any>) => {
  return knex.schema.createTable('account', (table: { increments: (arg0: string) => void; string: (arg0: string) => void; }) => {
    table.increments('id')
    table.string('status')
  });
};

export const down = (knex: any, promise: Promise<any>) => {
  return knex.schema.dropTable('account');
};
