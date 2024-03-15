import { url } from "./sql.js";

url`
    CREATE TABLE videos(
    id TEXT PRIMARY KEY,
    title          TEXT,
    description       TEXT,
    duration         INTEGER
);
`.then(() => {
    console.log('tabela criada')
})