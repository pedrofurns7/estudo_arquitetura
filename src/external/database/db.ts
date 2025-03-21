import pgPromise from "pg-promise";

const pgp = pgPromise()
const db = pgp({
    host: 'localhost',
    port: 5432,
    database: 'arqhex',
    user: "postgres",
    password: String(process.env.DB_PASSWORD)
})

export default db