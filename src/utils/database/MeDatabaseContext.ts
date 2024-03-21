import { injectable } from 'inversify';
import { Pool } from "pg";

@injectable()
export class MeDatabaseContext {
    pool: Pool;
    constructor() {
        this.pool = new Pool ({
            user        : process.env.DB_USER,
            password    : process.env.DB_PASS,
            host        : process.env.DB_HOST || 'localhost',
            port        : 5432,
            database    : process.env.DB_DATABASE
        });
    }    
}