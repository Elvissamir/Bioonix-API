import App from "../app"
import getMiddleware from "../middleware"
import errorMiddleware from "../middleware/errorMiddleware"
import { getRoutes } from "../routes"
import getDBModels from "../services/database/getDBModels"
import SequelizeMysqlDB from "../services/database/SequelizeMysqlDB"
import addProcessEvents from "./processStart"

addProcessEvents()

const APP = new App({
    routes: getRoutes(),
    middlewareList: getMiddleware(),
    errorMiddleware: errorMiddleware
})

const DB = () => {
    SequelizeMysqlDB.connect(getDBModels())
}

export {
    APP, 
    DB
}