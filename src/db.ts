import { Pool } from 'pg';

const connectionString = 'postgres://xxxxxx:xxxxxx@kesavan.db.elephantsql.com/jmcnebnv';

const db = new Pool({ connectionString });

export default db;