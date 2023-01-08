import { Dialect, Sequelize } from "sequelize";
import customerFactory from "../../customer/core/customerFactory";
import environment from "../environment/Environment";
import Logger from "../logger";
import { DBHandlerI, DBModelI } from "./db.interface";

const dbName = environment.getValue('DB_NAME') as string
const dbUser = environment.getValue('DB_USER') as string 
const dbHost = environment.getValue('DB_HOST') as string 
const dbDriver = environment.getValue('DB_DRIVER') as Dialect
const dbPassword = environment.getValue('DB_PASSWORD') as string

if (dbName === undefined) throw new Error('ERROR: .env Does not have a DB_NAME variable')
if (dbUser === undefined) throw new Error('ERROR: .env Does not have a DB_USER variable')
if (dbHost === undefined) throw new Error('ERROR: .env Does not have a DB_HOST variable')
if (dbDriver === undefined) throw new Error('ERROR: .env Does not have a DB_DRIVER variable')
if (dbPassword === undefined) throw new Error('ERROR: .env Does not have a DB_PASSWORD variable')

const dbConnection = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: dbDriver,
    logging: false
})

class SequelizeMysqlDB {
    static async loadTables() {
        Logger.info('DB: Loading customers data...')
        const customers = await customerFactory({ count: 10 })
        
        for (let customer of customers) {
            const { id, first_name, last_name, company } = customer
            Logger.info(`Id: ${id} Name: ${first_name} ${last_name}, company: ${company}`)
        }
    }
}

export {
    SequelizeMysqlDB,
    dbConnection
}