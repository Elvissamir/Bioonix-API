import { DBHandlerI } from "./db.interface";

interface DBHandlerParams {
    db: DBHandlerI
}

class DBHandler implements DBHandlerI {
    private readonly db: DBHandlerI

    constructor({ db }: DBHandlerParams) {
        this.db = db
    }

    async connect () {
        await this.db.connect()
    }
}

export default DBHandler