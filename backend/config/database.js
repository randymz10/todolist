import pg from 'pg';
import 'dotenv/config';

const db = new pg.Pool({
    database: process.env.DB,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
});

export default db;
