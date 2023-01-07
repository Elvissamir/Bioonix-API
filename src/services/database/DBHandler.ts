import { DBHandlerI } from "./db.interface";

interface DBHandlerParams {
    db: DBHandler
}

class DBHandler implements DBHandlerI {
    private readonly db: DBHandler

    constructor({ db }: DBHandlerParams) {
        this.db = db
    }

    async connect () {
        await this.db.connect()
    }
}

export default DBHandler