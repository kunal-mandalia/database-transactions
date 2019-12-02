import express from 'express';
import wait from 'waait';
import { knex } from "./database/connection";

interface IAccount {
  id: string;
  status: string;
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
    await wait(5000);
    return res.status(200).json({ accounts });
  });
});

app.listen(port, async () => {
  await initialiseDatabase();
  console.log(`database-transactions server running on ${port}`);
});
