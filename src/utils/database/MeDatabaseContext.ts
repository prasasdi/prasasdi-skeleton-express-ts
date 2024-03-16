import { injectable } from 'inversify';
import pgpromise from 'pg-promise';

@injectable()
export class MeDatabaseContext {
    
    constructor() {
        const initOptions = {

        };
        const db = pgpromise()(initOptions);
    }

    
}