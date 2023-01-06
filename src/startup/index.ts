import App from "../app"
import getMiddleware from "../middleware"
import errorMiddleware from "../middleware/errorMiddleware"
import { getRoutes } from "../routes"
import addProcessEvents from "./processStart"

addProcessEvents()

const APP = new App({
    routes: getRoutes(),
    middlewareList: getMiddleware(),
    errorMiddleware: errorMiddleware
})

export {
    APP
}