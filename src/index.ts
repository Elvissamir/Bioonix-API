import 'dotenv/config'
import { APP, DB } from './startup'

APP.start()
DB()