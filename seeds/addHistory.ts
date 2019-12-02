import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<any> {
  // Deletes ALL existing entries
  return knex('account').del()
    .then(() => {
      // Inserts seed entries
      return knex('account').insert([
        { id: 1, status: 'ACTIVE' },
        { id: 2, status: 'AWAITING_APPROVAL' },
        { id: 3, status: 'AWAITING_APPROVAL' },
        { id: 4, status: 'AWAITING_APPROVAL' },
        { id: 5, status: 'DELETED' },
      ]);
    });
};
