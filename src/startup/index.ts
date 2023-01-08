import App from "../app"
import Customer from "../customer/core/Customer"
import getMiddleware from "../middleware"
import errorMiddleware from "../middleware/errorMiddleware"
import { getRoutes } from "../routes"
import { SequelizeMysqlDB } from "../services/database/SequelizeMysqlDB"
import addProcessEvents from "./processStart"

addProcessEvents()

const APP = new App({
    routes: getRoutes(),
    middlewareList: getMiddleware(),
    errorMiddleware: errorMiddleware
})

const DB = async () => {
    await Customer.sync({ alter: true })
    await SequelizeMysqlDB.loadTables()
}

export {
    APP, 
    DB
}