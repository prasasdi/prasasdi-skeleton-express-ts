// using posgresql

import pgp from 'pg-promise';

export class DBContextFactory {
    static GetPostgreDBContext() {
        const port = process.env.DB_PORT || 5432;
        const host = process.env.DB_HOST || "localhost";
        return pgp({})(`postgres://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${host}:${port}/${process.env.DB_DATABASE}`)
    }
}