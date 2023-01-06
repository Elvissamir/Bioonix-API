import { Dialect, Sequelize } from 'sequelize'
import environment from '../environment/Environment'

const dbName = environment.getValue('DB_NAME') as string 
const dbUser = environment.getValue('DB_USER') as string 
const dbHost = environment.getValue('DB_HOST')
const dbDriver = environment.getValue('DB_DRIVER') as Dialect
const dbPassword = environment.getValue('DB_PASSWORD')

const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: dbDriver
})

export default sequelizeConnection