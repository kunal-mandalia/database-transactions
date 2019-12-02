import * as express from 'express';
import { knex } from "./database/connection";

(async () => {
  await knex.migrate.latest();
  await knex.seed.run();
})();
