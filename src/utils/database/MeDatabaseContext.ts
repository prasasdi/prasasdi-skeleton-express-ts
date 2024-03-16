import pgpromise from 'pg-promise';

export class MeDatabaseContext {
    
    constructor() {
        const initOptions = {

        };
        const db = pgpromise()(initOptions);
    }

    
}