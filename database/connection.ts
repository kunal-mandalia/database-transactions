import Knex from 'knex';
import knexfile from '../knexfile';
export const knex = Knex(knexfile.development);
knex.on('query', queryData => {
  console.log(queryData);
});
