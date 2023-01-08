import 'dotenv/config'
import Logger from './services/logger'
import { APP, DB } from './startup'

Logger.info('Prueba Desarrollador Bioonix - API')

APP.start()
DB()