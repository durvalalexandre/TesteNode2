import 'dotenv/config'
import postgres from "postgres";

let { PGHOST } = process.env;
const conn = PGHOST
console.log(conn)

export const url = postgres(conn, { ssl: 'require' });
