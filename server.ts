import express from 'express';
import wait from 'waait';
import { knex } from "./database/connection";

interface IAccount {
  id: string;
  status: string;
}

interface IHistory {
  id: string;
  event: string;
}

const app = express();
const port = process.env.PORT || 8080;

async function initialiseDatabase() {
  await knex.migrate.latest();
  await knex.seed.run();
}

app.post('/approve-signups', async (req, res) => {
  knex.transaction(async (trx: any) => {
    const accounts = await knex<IAccount>('account')
      .where({ status: 'AWAITING_APPROVAL' })
      .update({ status: 'ACTIVE' })
      .transacting(trx);
    // simulate some long running process
    await wait(10000);
    return res.status(200).json({ accounts });
  });
});

app.get('/accounts', async (req, res) => {
  const accounts = await knex<IAccount>('account').where({});
  return res.status(200).json({ accounts });
});

app.get('/history', async (req, res) => {
  const history = await knex<IHistory>('history').where({});
  return res.status(200).json({ history });
});

app.listen(port, async () => {
  await initialiseDatabase();
  console.log(`database-transactions server running on ${port}`);
});
