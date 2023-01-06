import { Router } from 'express'
import { readdirSync } from 'fs'
import Logger from '../services/logger'
import environment from '../services/environment/Environment'

const PATH = `${__dirname}`
const router = Router()

const cleanFileName = (fileName: string) => {
    return fileName.split('.')[0]
}

const getRoutes = () => {
    const dirContent = readdirSync(PATH)
    const fileNameList = dirContent.map(fileName => cleanFileName(fileName))
    const routeNamesList = fileNameList.filter(file => file !== 'index' && file !== 'appRoutes')

    for(const routeName of routeNamesList) {
        import(`./${routeName}`).then(moduleRouter => {
            if (environment.envType !== 'TEST')
                Logger.info(`Loading route api/${routeName}`)
            
            router.use(`/api/${routeName}`, moduleRouter.router)
        })
    }

    return router
}

export { getRoutes }