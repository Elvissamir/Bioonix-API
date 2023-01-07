import { Dialect, Sequelize } from "sequelize";
import Customer from "../../customer/core/Customer";
import customerFactory from "../../customer/core/customerFactory";
import environment from "../environment/Environment";
import Logger from "../logger";
import { DBHandlerI, DBModelI } from "./db.interface";

class SequelizeDBHandler implements DBHandlerI {
    private readonly dbName: string 
    private readonly dbUser: string 
    private readonly dbHost: string 
    private readonly dbDriver: Dialect
    private readonly dbPassword: string 
    public dbConnection: Sequelize | null

    constructor() {
        this.dbName = environment.getValue('DB_NAME') as string
        this.dbUser = environment.getValue('DB_USER') as string 
        this.dbHost = environment.getValue('DB_HOST') as string 
        this.dbDriver = environment.getValue('DB_DRIVER') as Dialect
        this.dbPassword = environment.getValue('DB_PASSWORD') as string
        this.dbConnection = null

        if (this.dbName === undefined) throw new Error('ERROR: .env Does not have a DB_NAME variable')
        if (this.dbUser === undefined) throw new Error('ERROR: .env Does not have a DB_USER variable')
        if (this.dbHost === undefined) throw new Error('ERROR: .env Does not have a DB_HOST variable')
        if (this.dbDriver === undefined) throw new Error('ERROR: .env Does not have a DB_DRIVER variable')
        if (this.dbPassword === undefined) throw new Error('ERROR: .env Does not have a DB_PASSWORD variable')
    }

    private init() {
        this.dbConnection = new Sequelize(this.dbName, this.dbUser, this.dbPassword, {
            host: this.dbHost,
            dialect: this.dbDriver,
            logging: false
        })
    }

    private async loadModels(dbModels: any[]) {
        if (this.dbConnection) {
            for (let dbModel of dbModels) {
                dbModel.load(this.dbConnection)
            }
        }
    }

    private async loadTables() {
        Logger.info('DB: Loading customers data...')
        const customers = await customerFactory({ count: 10 })
        
        for (let customer of customers) {
            const { id, first_name, last_name, company } = customer
            Logger.info(`Id: ${id} Name: ${first_name} ${last_name}, company: ${company}`)
        }
    }

    async connect(dbModels: DBModelI[]) {
        Logger.info('DB: Connect to MYSQL...')
        try {
            Logger.info('DB: Connecting to MYSQL...')
            this.init()

            if (this.dbConnection) {
                Logger.info('DB: Authenticating...')
                await this.dbConnection.authenticate()

                Logger.info('Loading models...')
                await this.loadModels(dbModels)

                Logger.info(`DB: Connected to MYSQL using ${this.dbName} ${this.dbUser} ${this.dbHost} ${this.dbDriver}`)

                await this.loadTables()
            }
        }
        catch (ex) {
            if (ex instanceof Error) {
                const message = `DB ERROR: Could not authenticate and connect to MYSQL ${ex.message}`
                Logger.error(message)

                throw new Error(message)
            }
        }
    }
}

const SequelizeMysqlDB = new SequelizeDBHandler()

export default SequelizeMysqlDB