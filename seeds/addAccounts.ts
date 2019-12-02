import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<any> {
  // Deletes ALL existing entries
  return knex('history').del()
    .then(() => {
      // Inserts seed entries
      return knex('history').insert([
        { id: 1, event: 'account.create' },
        { id: 2, event: 'account.update' },
      ]);
    });
};
